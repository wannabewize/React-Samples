import React from 'react';
import {BrowserRouter, Link, Switch, Route, useParams, withRouter, NavLink, useLocation, generatePath, Redirect, useHistory} from "react-router-dom";

import {Movies, MovieDetail} from "./Movies";
import Actors from "./Actors";
import ActorDetail from "./ActorDetail";
import {HistoryClass, HistoryFn} from "./History";

const routes = [
    { path: "/theater", component: Theaters },
    { path: "/genre", component: Genre },
]

function App() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/actors">Actors</Link></li>
                    <li><Link to="/theater">Theaters</Link></li>
                    <li><Link to="/genre">Genre</Link></li>
                    <li><Link to="/history1">History - Function</Link></li>
                    <li><Link to="/history2">History - Class</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route path="/movies" exact={true}>
                    <Movies />
                </Route>
                <Route path="/movies/:movieId" exact={true}>
                    <MovieDetail />
                </Route>
                <Route path="/actors" exact={true}>
                    <Actors />
                </Route>
                <Route path="/actors/:actorId" exact={true}>
                    <ActorDetail />
                </Route>
                <Route path="/theater">
                    <Theaters />
                </Route>
                <Route path="/history1">
                    <HistoryFn />
                </Route>
                <Route path="/history2">
                    <HistoryClass />
                </Route>
                {routes.map( (item) => (
                    <Route path={item.path}>
                        {item.component}
                    </Route>
                ))}                
                <Route path="*">
                    <DefaultComponent />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

function DefaultComponent() {
    return (
        <h2>React Navigation Example</h2>
    )
}

function Theaters() {
    return <h2>Theaters with router config</h2>
}

function Genre() {
    return <h2>Genre with router config</h2>
}

export default App;
