import React from "react";
import {withRouter} from "react-router-dom";
import {MovieDetail} from "./MovieDetail";

class MovieDetailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movie: null }
    }

    fetchMovieDetail = async () => {
        const {movieId} = this.props.match.params;
        console.log('movie detail for :', movieId);
        const doc = await this.props.db.collection('movies').doc(movieId).get();

        if ( doc.exists ) {
            this.setState({movie: doc.data()});
        }
        else {
            this.setState({movie: null});
        } 
    }

    componentDidMount() {
        this.fetchMovieDetail();
    }

    render() {
        return (
            <div>
                <h3>Movie Detail Class Component</h3>
                {
                    this.state.movie
                        ? <MovieDetail movie={this.state.movie} />
                        : <h5>영화 정보가 없습니다.</h5>
                }   
        </div>);
    }
}

export const MovieDetailClassComponent = withRouter(MovieDetailComponent);