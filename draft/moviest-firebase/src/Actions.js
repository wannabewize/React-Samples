export const FETCH_MOVIES = "FETCH_MOVIES";

export function fetchMovies(movies) {
    return {
        type: FETCH_MOVIES,
        movies
    }
}