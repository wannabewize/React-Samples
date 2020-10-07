import React from 'react';
import styled from "styled-components";
import './App.css'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const headStyle = {
    fontSize: '1.5em',
    textAlign: 'center',
    color: 'palevioletred'
};

function App() {
    return (
        <div>
            <Title>Styled Component Example</Title>
            <h1 className="headStyle">CSS Style Example</h1>
            <h1 style={headStyle}>CSS Style Example</h1>
            <h1 style={{
                fontSize: '1.5em',
                textAlign: 'center',
                color: 'palevioletred'
            }}>CSS Style Example</h1>
        </div>
    );
}

export default App;
