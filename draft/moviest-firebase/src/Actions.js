import firebase from 'firebase/app';

export const REQUEST_MOVIES = "REQUEST_MOVIES";
export const RECEIVE_MOVIES = "RECEIVE_MOVIES";


export function requestMovies() {
    return {
        type: REQUEST_MOVIES,
    }
}

export function receiveMovies(movies) {
    console.log('receive movies works:', movies);
    return {
        type: RECEIVE_MOVIES,
        movies
    }
}

// Firestore에서 영화 목록 얻기
export const fetchMovies = async (dispatch) => {
    const db = firebase.firestore();
    const snapshot = await db.collection('movies').get();
    let items = snapshot.docs.map( item => {
        return {...item.data(), id: item.id};
    } );
    return dispatch(receiveMovies(items));
}