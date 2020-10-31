import React from "react";
import { connect } from "react-redux";
import { MovieList } from "./MovieList";
import { fetchMovies } from "./Actions";

class MovieListComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('fetching movies', this.props);
        fetchMovies(this.props.dispatch);
    }

    componentDidUpdate(prevProps) {
        console.log('componentDidUpdate');
    }

    render() {
        return (
            <div>
                <h3>MovieList Class Component</h3>
                { this.props.movies
                    ? <MovieList movies={this.props.movies} />
                    : <h5>영화 목록이 없습니다.</h5>
                }
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {        
        movies: state.movies
    };
}

export const MovieListClassComponent = connect(mapStateToProps)(MovieListComponent)