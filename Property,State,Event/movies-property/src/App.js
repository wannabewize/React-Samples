import React from 'react';
import { movies } from './MovieData';

const MovieItem = ({item}) => {
    return (
        <li>{item.title}</li>
    )    
}

const MovieList = ({movies}) => (
    <ul>
        {
            movies.map( (item) => (
                <MovieItem item={item} key={item.id} />
            ))
        }
    </ul>    
)

const AppTitle = () => (<h1>Hot Netflix Movies</h1>)

function App() {
    return (
        <div>
            <AppTitle />
            <MovieList movies={movies} />
        </div>
    );
}

export default App;
