import React from "react";

export const MovieList = ({movies}) => (
    <ul>
        { movies.map( item => (
            <li key={item.id}><a href={`/movies/${item.id}`}>{item.title}</a></li>
        ))}
    </ul>    
)
