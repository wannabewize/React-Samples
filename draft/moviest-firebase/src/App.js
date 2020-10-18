import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import firebase from "firebase";
import {MovieListFnComponent} from "./MovieListFnComponent";
import {MovieListClassComponent} from "./MovieListClassComponent";
import {MovieDetailClassComponent} from "./MovieDetailClassComponent";
import {MovieDetailFnComponent} from "./MovieDetailFnComponent";
import {firebaseConfig} from "./firebaseConfig";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function App() {
    console.log('App Rendering!');
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/movies" exact={true}>
                <h1>Moviest by Firebase</h1>
                <MovieListFnComponent db={db} />
                <MovieListClassComponent db={db} />
            </Route>
            <Route path="/movies/:movieId" exact={true}>
                <h1>Movie Detail by Firebase</h1>
                <MovieDetailFnComponent db={db} />
                <MovieDetailClassComponent db={db} />
            </Route>
            <Route path="*">
                <Redirect to="/movies" />
            </Route>
        </Switch>
        </BrowserRouter>
    );
}

export default App;

