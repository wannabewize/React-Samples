import React  from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import {MovieListComponent} from "./MovieListComponent";
import {MovieDetailComponent} from "./MovieDetailComponent";

function App() {
    return (        
        <BrowserRouter>
        <h1>Movies</h1>
        <Switch>
            <Route path="/movies" exact={true}>
                <MovieListComponent />
            </Route>
            <Route path="/movies/:movieId" exact={true}>
                <MovieDetailComponent />
            </Route>
            <Route path="*">
                <Redirect to="/movies" />
            </Route>
        </Switch>
        </BrowserRouter>
    );
}

export default App;
