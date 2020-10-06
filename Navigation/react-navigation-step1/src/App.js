import React from 'react';
import {BrowserRouter, Link, Switch, Route, useParams, withRouter, NavLink, useLocation, generatePath, Redirect, useHistory} from "react-router-dom";


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

function Movies() {
    const location = useLocation();    
    const query = new URLSearchParams(location.search);
    const genre = query.get('genre');
    const year = query.get('year');
    console.log('genre:', query.get('genre'));

    return (
        <div>
        <h2>Movies</h2>
        <h5>genre: {genre}, year: {year}</h5>        
        <ul>
            <li><Link to="/movies/1">위쳐</Link></li>
            <li><Link to="/movies/2">사이코지만 괜찮아</Link></li>
            <li><NavLink
                to="/movies/2"
                isActive={() => false}>사이코지만 괜찮아- inActive</NavLink></li>
        </ul>
        </div>
    )
}

function MovieDetail() {
    let {movieId} = useParams()
    console.log('movieId :', movieId);
    return (<h2>MovieDetail for {movieId}</h2>);
}

class ActorsComponent extends React.Component {
    render() {
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const gender = params.get('gender');
        console.log('gender:', gender);

        return (
            <div>
            <h2>Actors</h2>
            <h5>gender: {gender}</h5>
            <ul>
                <li><Link to="/actors/1">헨리 카빌</Link></li>
                <li><Link to="/actors/2">서예지</Link></li>
            </ul>
            </div>
        );
    }
}
const Actors = withRouter(ActorsComponent);

function Theaters() {
    return <h2>Theaters</h2>
}

function Genre() {
    return (
        <div>
        <h2>Genre</h2>
        </div>
    )
}

function HistoryFn() {
    const history = useHistory();
    console.log('history:', history);

    return (
        <div>
        <h2>History - Function Component</h2>
        <button onClick={() => {history.goBack()}}>go Back</button>
        <button onClick={() => {history.push("/movies")}}>go Movies</button>
        </div>
    )
}

class HistoryClassComponent extends React.Component {
    render() {
        const history = this.props.history;
    
        return (
            <div>
            <h2>History - Class Component</h2>
            <button onClick={() => {history.goBack()}}>go Back</button>
            <button onClick={() => {history.push("/movies")}}>go Movies</button>
            </div>
        )
    }
}
const HistoryClass = withRouter(HistoryClassComponent);

class ActorDetailComponent extends React.Component {
    render() {
        console.log('props :', this.props);
        const params = this.props.match.params;
        const {actorId} = params;
        return (<h2>Actor Detail for {actorId}</h2>)
    }
}

const ActorDetail = withRouter(ActorDetailComponent);

export default App;
