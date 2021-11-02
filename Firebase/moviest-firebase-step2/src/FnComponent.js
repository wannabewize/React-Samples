import React, {useState, useEffect} from 'react';
import { getFirestore } from "firebase/firestore"

export function FnComponent({db}) {
    let [movies, setMovies] = useState([]);
    const db = getFirestore();

    const fetchMovies = async () => {
        const snapshot = await getDocs(collection(db, "movies"));
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

