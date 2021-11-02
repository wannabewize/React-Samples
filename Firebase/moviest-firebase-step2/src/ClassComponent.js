import React from "react";
import { getFirestore } from "firebase/firestore";
import { doc, collection, getDocs } from "firebase/firestore";

export class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movies: [] }
        this.db = getFirestore();
    }

    fetchMovies = async () => {
        const snapshot = await getDocs(collection(this.db, "movies")); 
        let movies = snapshot.docs.map( item => item.data() );
        this.setState({movies});
        console.log('fetched movies :', movies);        
    }

    componentDidMount() {
        this.fetchMovies();
    }

    render() {
        return (
            <div>
                <h3>Moviest - ClassComponent </h3>
                <ul>
                { this.state.movies.map( item => (
                    <li>{item.title}</li>
                ))}
                </ul>
        </div>);
    }
}