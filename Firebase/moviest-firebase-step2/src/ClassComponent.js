import React from "react";

export class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movies: [] }
    }

    fetchMovies = async () => {
        const snapshot = await this.props.db.collection('movies').get();
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