import {REQUEST_MOVIES, RECEIVE_MOVIES} from "./Actions";

import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import { firebaseConfig } from "./firebaseConfig";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

const initialState = {
    title: 'Redux - Store',
    loading: false,
    firestore,
    movies: []
};
console.log('initial state ', initialState);

export async function reducer(state = initialState, action) {
    switch (action.type) {        
        case REQUEST_MOVIES:
            return {...state, loading: true};
        case RECEIVE_MOVIES:
            const newState = {...state, movies: action.movies, loading: false};
            console.log('new state :', newState);
            return newState;
        default:
            return state
    }
}