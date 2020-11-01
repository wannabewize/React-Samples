import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MovieList } from "./MovieList";

export function MovieListFnComponent() {
    // Store에서 movies 목록
    const movies = useSelector((state) => state.movies);

    return (
        <div>
            <h3>MovieList Function Component</h3>
            {
                movies ? <MovieList movies={movies}/> : <h5>영화 목록이 없습니다.</h5>
            }
        </div>
    );
}

