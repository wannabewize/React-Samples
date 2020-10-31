import React from 'react';
import { useSelector } from 'react-redux';
import { MovieList } from "./MovieList";

export function MovieListFnComponent() {
    const movies = useSelector((state) => state.movies);

    return (
        <div>
            <h3>MovieList Function Component</h3>
            {
                movies ? <MovieList movies={movies}/> : <h5> Movies non-exist</h5>
            }
        </div>
    );
}