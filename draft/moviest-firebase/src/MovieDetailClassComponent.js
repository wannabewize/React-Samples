import React from "react";
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import {MovieDetail} from "./MovieDetail";

class MovieDetailComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>Movie Detail Class Component</h3>
                {
                    this.props.movie
                        ? <MovieDetail movie={this.props.movie} />
                        : <h5>영화 정보가 없습니다.</h5>
                }   
        </div>);
    }
}

// withRouter를 connect보다 외부에 배치해서 props로 라우트 파라미터 전달
const mapStateToProps = (state, props) => {
    //console.log('MovieDetailComponent - state :', state, props);
    const {movieId} = props.match.params;
    // null 비교를 해야한다.
    console.log('movie :', state.firestore.data.movies && state.firestore.data.movies[movieId])
    return {
        movie: state.firestore.data.movies && state.firestore.data.movies[movieId]
    };
}

export const MovieDetailClassComponent = withRouter(connect(mapStateToProps)(MovieDetailComponent));