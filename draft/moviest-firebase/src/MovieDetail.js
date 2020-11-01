import React from 'react';

export function MovieDetail({movie}) {
    return (
        <ul>
            <li>제목 : {movie.title}</li>
            <li>출연 : {movie.stars}</li>
            <li>장르 : {movie.genre}</li>
            <li><img height={200} src={movie.poster} /></li>
        </ul>
    )
}