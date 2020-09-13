import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const title = 'Hot Netflix Movies';
  let movies = ['킹덤', '종이의 집', '인간수업', '동백꽃 필 무렵'];  

  return (
    <div>
      <h1>{title}</h1>
      <ul>
      {movies.map( (value) => (
        <li>{value}</li>
      ))}
      </ul>
    </div>
  );
}

export default App;
