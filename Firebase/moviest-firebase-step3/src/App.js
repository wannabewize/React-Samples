import React from 'react';
import {BrowserRouter, Link, Switch, Route, Redirect} from "react-router-dom";

import {MovieListFnComponent} from "./MovieListFnComponent";
import MovieListClassComponent from "./MovieListClassComponent";
import {MovieDetailClassComponent} from "./MovieDetailClassComponent";
import {MovieDetailFnComponent} from "./MovieDetailFnComponent";

function App() {
    return (
        <BrowserRouter>
        <h1>Moviest by Firebase</h1>
        <Switch>
            <Route path="/movies" exact={true}>
                <MovieListFnComponent />
                <MovieListClassComponent />
            </Route>
            <Route path="/movies/:movieId" exact={true}>
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

