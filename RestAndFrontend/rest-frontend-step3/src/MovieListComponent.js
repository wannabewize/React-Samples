import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
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
                    <li><Link to={`/movies/${item.id}`}>{item.title}</Link></li>
                ))
            }
        </ul>
    );
}