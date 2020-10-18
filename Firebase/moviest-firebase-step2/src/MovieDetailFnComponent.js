import React, {useState, useEffect} from 'react';
import {MovieDetail} from './MovieDetail';
import {useParams} from "react-router-dom";
import _ from 'lodash';

export function MovieDetailFnComponent({db}) {
    let [movie, setMovie] = useState([]);
    const {movieId} = useParams();

    const fetchMovieDetail = async () => {
        console.log('movie detail for :', movieId);
        const doc = await db.collection('movies').doc(movieId).get();

        console.log('doc :', doc);

        if ( doc.exists ) {
            setMovie(doc.data());
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
