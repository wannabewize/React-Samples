import React, {useState, useEffect} from 'react';
import {resolveMovieList} from "./MovieService";

export function MovieListComponent() {
    let [movies, setMovies] = useState([]);

    useEffect(() => {
        resolveMovieList().then( movies => { setMovies(movies.data) });
    }, []);

    return (
        <ul>
            {
                movies.map( item => (
                    <li>{item.title}</li>
                ))
            }
        </ul>
    );
}