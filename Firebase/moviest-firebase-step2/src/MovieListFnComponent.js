import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import _ from 'lodash';

export function MovieListFnComponent({db}) {
    let [movies, setMovies] = useState([]);

    const fetchMovies1 = async () => {
        const snapshot = await db.collection('movies').get();
        let items = snapshot.docs.map( item => item.data() );

        if ( JSON.stringify(items) !== JSON.stringify(items) ) {
            console.log('영화 정보 얻기, 영화 정보 상이 - 렌더링 필요. JSON 비교');
        }
        else {
            console.log('영화 정보 얻기. 영화 정보 동일. 렌더링 불필요');
        }

        if (! _.isEqual(items, movies) ) {
            console.log('영화 정보 얻기, 영화 정보 상이 - 렌더링 필요. lodash.isEqual :', movies);        
            setMovies(items);
        } else {
            console.log('영화 정보 얻기. 영화 정보 동일. 렌더링 불필요')
        }
    }   

    const fetchMovies2 = async () => {
        const snapshot = await db.collection('movies').get();
        let items = snapshot.docs.map( item => {
            return {...item.data(), id: item.id};
        } );
        setMovies(items);
    }        

    useEffect( () => {
        console.log('useEffect works');
        fetchMovies2();
    }, []);
    
    console.log('MovieListFnComponent rendering!');
    return (
        <div>
            <h3>MovieList Function Component</h3>
            <ul>
            { movies.map( item => (
                <li key={item.id}><Link to={`/movies/${item.id}`}>{item.title}</Link></li>
            ))}
            </ul>
        </div>
    );
}

