import React, {useState, useEffect} from 'react';
import { getFirestore } from "firebase/firestore"
import { doc, collection, getDocs, getDoc } from "firebase/firestore";
import {MovieDetail} from './MovieDetail';
import {useParams} from "react-router-dom";
import _ from 'lodash';

export function MovieDetailFnComponent() {
    let [movie, setMovie] = useState([]);
    const {movieId} = useParams();
    const db = getFirestore();

    const fetchMovieDetail = async () => {
        console.log('movie detail for :', movieId);        
        const docRef = doc(db, "movies", movieId);
        const movieDoc = await getDoc(docRef);

        console.log('doc :', movieDoc);

        if ( movieDoc.exists ) {
            setMovie(movieDoc.data());
        }
        else {
            setMovie(null);
        }
    }   
   
    useEffect( () => {
        fetchMovieDetail();
    }, []);
    
    console.log('Movie Detail Function Component rendering!');
    return (
        <div>
            <h3>Movie Detail Function Component</h3>
            {
                movie ? <MovieDetail movie={movie} /> : <h5>영화 정보가 없습니다.</h5>
            }
        </div>
    );
}
