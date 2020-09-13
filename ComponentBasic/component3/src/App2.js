import React from 'react';
import logo from './logo.svg';
import './App.css';

class App2 extends React.Component {
    title = 'Hot Netflix Movies';
    movies = [
        { title: "킹덤", year: 2019 },
        { title: "위쳐", year: 2019 },
        { title: "인간수업", year: 2020 },
        { title: "사이코지만 괜찮아", year: 2020 },
        { title: "슬기로운 의사생활", year: 2020 },
        { title: "러브, 데스 + 로봇", year: 2019 },
        { title: "엄브렐러 아카데미", year: 2019 }
    ];

    render() {
        let element = this.movies
            .filter( item => item.year == 2019 )
            .map( item => <li>{item.title} - {item.year}</li>);

        return (
            <div>
                <h1>{this.title}</h1>
                <ul>{element}</ul>            
            </div>
        );
    }
}

export default App2;
