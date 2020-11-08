import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {resolveMovieDetail, ServerAddress} from "./MovieService";

export function MovieDetailComponent() {
    const [movie, setMovie] = useState();
    const {movieId} = useParams();

    useEffect(() => {
        resolveMovieDetail(movieId).then( movie => { setMovie(movie.data) });        
    }, []);

    return (
        <div>
        <h5>Movie detail</h5>
        { movie ? 
            <ul>
                <li><img src={ServerAddress + movie.image} height={200} /></li>
                <li>제목 : {movie.title}</li>
                <li>출연 : {movie.stars}</li>
                <li>장르 : {movie.genre}</li>
            </ul>
            :
            <p>정보가 없습니다.</p>    
        }
        </div>
    )
}