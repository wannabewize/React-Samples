import React from 'react';
import './App.css';


const Mobile = () => {
  return (
    <div><h1>Mobile</h1></div>
  )
}

const Desktop = () => {
  return (
    <div><h1>Desktop</h1></div>
  )
}

const App = ({width, isMobile}) => {
  return (
    <div className="App">
      <div>width : {width}</div>
      <div>isMobileLayout : {''+isMobile}</div>

      {isMobile ? <Mobile /> : <Desktop />}

    </div>
  );
}

export default App;
