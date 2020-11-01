import React from "react";
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import {MovieDetail} from "./MovieDetail";
import { requestMovieDetail } from "./Actions";

class MovieDetailComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('componentDidMount :', this.props.movie );

        const movie = this.props.movieDetails[this.props.movieId];
        if ( !movie ) {
            requestMovieDetail(this.props.dispatch, this.props.movieId);
        }
    }
    render() {
        const movie = this.props.movieDetails[this.props.movieId]
        return (
            <div>
                <h3>Movie Detail Class Component</h3>
                {
                    movie
                        ? <MovieDetail movie={movie} />
                        : <h5>영화 정보가 없습니다.</h5>
                }   
        </div>);
    }
}

// withRouter를 connect보다 외부에 배치해서 props로 라우트 파라미터 전달
const mapStateToProps = (state, props) => {    
    const {movieId} = props.match.params;
    return {
        movieId,
        movieDetails : state.movie.movieDetails
    };
}

export const MovieDetailClassComponent = withRouter(connect(mapStateToProps)(MovieDetailComponent));