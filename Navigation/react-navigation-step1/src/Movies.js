import React from "react";
import {useLocation, useParams, Link} from "react-router-dom";

export function Movies() {
    const location = useLocation();    
    const query = new URLSearchParams(location.search);
    const genre = query.get('genre');
    const year = query.get('year');
    console.log('genre:', query.get('genre'));

    return (
        <div>
        <h2>Movies</h2>
        <h5>Query : genre: {genre}, year: {year}</h5>
        <h3>Filter</h3>
        <ul>
            <li><Link to="./movies?genre=drama" replace={true}>drama</Link></li>
            <li><Link to="./movies?genre=action" replace={true}>action</Link></li>
        </ul>
        <h3>Movie List</h3>
        <ul>
            <li><Link to="/movies/1">위쳐</Link></li>
            <li><Link to="/movies/2">사이코지만 괜찮아</Link></li>
        </ul>
        </div>
    )
}

export function MovieDetail() {
    let {movieId} = useParams()
    console.log('movieId :', movieId);
    return (<h2>MovieDetail for {movieId}</h2>);
}