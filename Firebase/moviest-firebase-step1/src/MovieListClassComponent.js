import React from 'react';
import { getFirestore } from "firebase/firestore"
import { doc, collection, getDocs } from "firebase/firestore";

export class MovieListClassComponent extends React.Component {    
    constructor(props) {
        super(props);
        this.state = { movies: [] }
        this.db = getFirestore();
    }

    fetchMovies = async () => {
        const snapshot = await getDocs(collection(this.db, "movies"));        
        let items = snapshot.docs.map( item => {
            // 도큐먼트의 id는 doc에 있음. data() 에서 얻지 못함
            return {...item.data(), id: item.id};
        } );
        this.setState({movies: items});
        console.log('fetched movies :', items);        
    }

    componentDidMount() {
        this.fetchMovies();
    }

    render() {
        return (
            <div>
                <h3>MovieList Class Component</h3>
                <ul>
                { this.state.movies.map( item => (
                    <li key={item.id}><a href={`/movies/${item.id}`}>{item.title}</a></li>
                ))}
                </ul>
        </div>);
    }
}