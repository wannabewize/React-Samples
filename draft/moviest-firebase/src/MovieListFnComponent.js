import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from "react-redux-firebase";
import { MovieList } from "./MovieList";

export function MovieListFnComponent() {
    useFirestoreConnect([{
        collection: 'movies',
    }]);

    const movies = useSelector((state) => state.firestore.ordered.movies);

    return (
        <div>
            <h3>MovieList Function Component</h3>
            {
                movies ? <MovieList movies={movies}/> : <h5> Movies non-exist</h5>
            }
        </div>
    );
}

