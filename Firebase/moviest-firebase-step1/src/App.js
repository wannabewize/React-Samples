import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

import {MovieListFnComponent} from "./MovieListFnComponent";
import {MovieListClassComponent} from "./MovieListClassComponent";
import {firebaseConfig} from "./firebaseConfig";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function App() {
    console.log('App Rendering!');
    return (
        <div>
            <h1>Moviest by Firebase</h1>
            <MovieListFnComponent db={db} />
            <MovieListClassComponent db={db} />
        </div>
    );
}

export default App;

