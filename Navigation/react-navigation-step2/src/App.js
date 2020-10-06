import React, {useState} from 'react';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";

const movies = [
    {"id": 0, "title": "킹덤", "year": 2019,
        "genere": "Action, Drama, Horror",
        "stars": "주지훈, 배두나, 류승룡 외"},
    {"id": 1, "title": "위쳐", "year": 2019,
        "genere": "Action, Adventure, Fantasy",
        "stars": "헨리 카빌, 안야 차로트라, 프레이아 앨런"},
    {"id": 2, "title": "인간수업", "year": 2020,
        "genere": "Crime, Drama",
        "stars": "김동희, 박주현, 정다빈, 남윤수, 최민수, 김여진, 박혁권 외"},
    {"id": 3, "title": "사이코지만 괜찮아", "year": 2020,
        "genere": "Comedy, Drama, Romance",
        "stars": "김수현, 서예지, 오정세, 박규영 외"},
    {"id": 4, "title": "슬기로운 의사생활", "year": 2020,
        "genere": "Comedy, Drama",
        "stars": "조정석, 유연석, 정경호, 김대명, 전미도 외"},
    {"id": 5, "title": "러브, 데스 + 로봇", "year": 2019,
        "genere": "Animation, Short, Comedy",
        "stars": "토퍼 그레이스, 메리 엘리자베스 윈스티드, 게리 콜 외"}
]

function App() {
    let [favorite, setFavorite] = useState([]);
    function addFavorite(movieId) {
        const newFavorite = [...favorite, movieId];
        setFavorite(newFavorite);
    }
    
    return (
        <BrowserRouter>
        <nav>
            <ul>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/favorites">Favorite</Link></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/movies">
                <Movies movies={movies} addFavorite={addFavorite}/>
            </Route>
            <Route path="/favorites">
                <Favorites favorite={favorite} />
            </Route>
            <Route path="*">
                <h1>React Route Example</h1>
            </Route>
        </Switch>
        </BrowserRouter>
    );
}

function Movies({movies, addFavorite}) {
    return (
        <div>
            <h1>Movies</h1>
            <ul>
            {movies.map(item=> (
                <li key={item.id}>
                    <Link to={{pathname: "/movies/" + item.id}}>{item.title}</Link>
                    <button onClick={() => addFavorite(item.id)}>즐겨찾기</button>
                </li>
            ))}
            </ul>
        </div>
    )
}

function Favorites({favorite}) {
    return (
        <div>
            <h1>Favorites</h1>
            <h5>즐겨찾기 영화 개수 : {favorite.length}</h5>
            <ul>
                {favorite.map(item => (
                    <li key={item.id}>영화 id : {item}</li>
                ))}
            </ul>
        </div>
    )
}

export default App;
