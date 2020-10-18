import React from "react";

export class MovieListClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movies: [] }
    }

    fetchMovies = async () => {
        const snapshot = await this.props.db.collection('movies').get();
        let items = snapshot.docs.map( item => {
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