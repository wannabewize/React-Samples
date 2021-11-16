import React from 'react';
import {BrowserRouter, Link, Switch, Route, Redirect} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {firebaseConfig} from "./firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import {MovieListFnComponent} from "./MovieListFnComponent";
import MovieListClassComponent from "./MovieListClassComponent";
import {MovieDetailClassComponent} from "./MovieDetailClassComponent";
import {MovieDetailFnComponent} from "./MovieDetailFnComponent";
import LoginComponent from "./LoginComponent";
import UserComponent from "./UserComponent";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    console.log('user auth state changed:', user);
    
    if (user) {
        const uid = user.uid;
        // authChanged(store.dispatch, user);
    } else {
        // User is signed out
        console.log('sign out');
    }
});


function App() {
    return (
        <BrowserRouter>
        <h1>Moviest by Firebase</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
        
        <UserComponent />
        <Switch>
            <Route path="/movies" exact={true}>
                <MovieListFnComponent />
                <MovieListClassComponent />
            </Route>
            <Route path="/movies/:movieId" exact={true}>
                <MovieDetailFnComponent />
                <MovieDetailClassComponent /> 
            </Route>
            <Route path="/login" exact={true}>
                <LoginComponent />
            </Route>
            <Route path="*">
                <Redirect to="/movies" />
            </Route>
        </Switch>
        </BrowserRouter>
    );
}

export default App;

