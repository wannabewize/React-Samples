import React from "react";
import { getFirestore } from "firebase/firestore"
import { doc, getDoc } from "firebase/firestore";
import {withRouter} from "react-router-dom";
import {MovieDetail} from "./MovieDetail";

class MovieDetailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movie: null }
        this.db = getFirestore();
    }

    fetchMovieDetail = async () => {
        const {movieId} = this.props.match.params;
        console.log('movie detail for :', movieId);
        const docRef = doc(this.db, "movies", movieId);
        const movieDoc = await getDoc(docRef);
        
        if ( movieDoc.exists ) {
            this.setState({movie: movieDoc.data()});
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