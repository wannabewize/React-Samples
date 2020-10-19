import React from "react";
import { connect } from "react-redux";
import { MovieList } from "./MovieList";

class MovieListComponent extends React.Component {
    constructor(props) {
        super(props);
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
        movies: state.firestore.ordered.movies
    };
}

export const MovieListClassComponent = connect(mapStateToProps)(MovieListComponent)