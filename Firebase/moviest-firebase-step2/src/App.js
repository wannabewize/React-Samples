import React from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import {MovieListFnComponent} from "./MovieListFnComponent";
import {MovieListClassComponent} from "./MovieListClassComponent";
import {MovieDetailClassComponent} from "./MovieDetailClassComponent";
import {MovieDetailFnComponent} from "./MovieDetailFnComponent";
import {firebaseConfig} from "./firebaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
    console.log('App Rendering!');
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/movies" exact={true}>
                <h1>Moviest by Firebase</h1>
                <MovieListFnComponent />
                <MovieListClassComponent />
            </Route>
            <Route path="/movies/:movieId" exact={true}>
                <h1>Movie Detail by Firebase</h1>
                <MovieDetailFnComponent />
                <MovieDetailClassComponent />
            </Route>
            <Route path="*">
                <Redirect to="/movies" />
            </Route>
        </Switch>
        </BrowserRouter>
    );
}

export default App;

