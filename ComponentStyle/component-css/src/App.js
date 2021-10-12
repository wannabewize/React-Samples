import logo from './logo.svg';
import './App.css';

import poster1 from './images/squid_game.jpg';
import poster2 from './images/thewitcher.jpg';

const MovieInfo = ({img, title, actors}) => {
    return (
        <>
            <img src={img} />                            
            <span>{title}</span>
            <span>{actors}</span>            
        </>
    )
}

const movies = [
    {
        title: 'Squid Game',
        poster: poster1,
        actors: '이정재, 박해수, 오영수, 위하준, 정호연, 허성태, 아누팜 트리파티, 김주령, 이유미 외'
    },
    {
        title: 'The Witcher',
        poster: poster2,
        actors: '헨리 카빌, 안야 차로트라, 프레이아 앨런 외'

    },
]

function App() {
    return (
        <div className="App">
            <header className="App-header">
                Favorite Netflix
            </header>
            <div>
                <ul>
                    {movies.map( item => (
                        <li>
                            <MovieInfo title={item.title} img={item.poster} actors={item.actors}/>    
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
