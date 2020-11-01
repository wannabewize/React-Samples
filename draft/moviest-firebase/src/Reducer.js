import {FETCH_MOVIES, FETCH_MOVIE_DETAIL} from "./Actions";

const initialState = {
    title: 'Redux - Store',
    movies: null,
    movieDetails: {}
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            return { ...state, movies: action.movies };
        case FETCH_MOVIE_DETAIL:
            let movieId = action.movieId;
            let movieDetails = { ...state.movieDetails, [movieId]:action.movie};
            console.log('Reducer - FETCH_MOVIE_DETAIL:', movieDetails)
            return {...state, movieDetails};
        default:
            return state
    }
}