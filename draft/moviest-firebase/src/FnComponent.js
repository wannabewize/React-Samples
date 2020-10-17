import React, {useState, useEffect} from 'react';

export function FnComponent({db}) {
    let [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
        const snapshot = await db.collection('movies').get();
        let items = snapshot.docs.map( item => item.data() );
        setMovies(items);
        console.log('fetched movies :', movies);        
    }        

    useEffect( () => {
        fetchMovies();
    }, []);
    
    console.log('FnComponent rendering!');
    return (
        <div>
            <h3>Moviest - by Firebase</h3>
            <ul>
            { movies.map( item => (
                <li>{item.title}</li>
            ))}
            </ul>
        </div>
    );
}

