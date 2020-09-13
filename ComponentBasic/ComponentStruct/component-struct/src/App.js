import React from 'react';
import {MovieTitle} from './MovieTitle';
import MovieList from './MovieList';
import indukLogo from './induk_logo.png';

function App() {
    return (
        <div>
            <img src={indukLogo} />
            <MovieTitle />
            <MovieList />
        </div>
    );
}
export default App;
