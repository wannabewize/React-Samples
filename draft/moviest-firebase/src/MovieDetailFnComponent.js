import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from "react-redux-firebase";
import {MovieDetail} from './MovieDetail';
import {useParams} from "react-router-dom";

export function MovieDetailFnComponent({db}) {
    const {movieId} = useParams();
    useFirestoreConnect([{
        collection: 'movies',
        doc: movieId
    }]);

    const movie = useSelector((state) => {
        let data = state.firestore.data.movies;  
        // console.log('movie:', data);
        return data && data[movieId];
    })
    
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
