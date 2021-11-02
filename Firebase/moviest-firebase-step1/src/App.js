import React from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {MovieListFnComponent} from "./MovieListFnComponent";
import {MovieListClassComponent} from "./MovieListClassComponent";
import {firebaseConfig} from "./firebaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
    console.log('App Rendering!');
    return (
        <div>
            <h1>Moviest by Firebase</h1>
            <MovieListFnComponent />
            <MovieListClassComponent />
        </div>
    );
}

export default App;

