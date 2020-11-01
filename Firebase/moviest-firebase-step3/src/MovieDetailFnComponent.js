import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {MovieDetail} from './MovieDetail';
import {useParams} from "react-router-dom";
import {requestMovieDetail} from "./Actions";

export function MovieDetailFnComponent({db}) {
    const {movieId} = useParams();

    const dispatch = useDispatch();

    const movie = useSelector((state) => {
        return state.movieDetails[movieId];
    });

    useEffect( () => {
        console.log('useEffect works');
        if ( !movie ) {            
            requestMovieDetail(dispatch, movieId);
        }
    }, [])
    
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
