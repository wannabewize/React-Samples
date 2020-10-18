import {FETCH_MOVIES} from "./Actions";

const initialState = {
    title: 'Redux - Store',
    movies: null
};

// const fetchMovies = async (db) => {
//     const snapshot = await db.collection('movies').get();
//     let items = snapshot.docs.map( item => {
//         return {...item.data(), id: item.id};
//     } );
//     return items;
// }

export async function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            // const movies = await fetchMovies(state.db);
            // console.log('fetch movies');
            return { ...state, movies: action.movies };
        default:
            return state
    }
}