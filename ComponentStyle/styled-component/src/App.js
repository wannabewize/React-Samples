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

const Circle = styled.div`
    width: 5rem;
    height: 5rem;
    background: black;
    border-radius: 50%;
`;

const ParameterizedCircle = styled.div`
    border-radius: 50%;
    ${props =>
        `
            background: ${props.color || 'black'};
            width: ${props.size || 5};
            height: ${props.size || 5};
        ` 
    };        
`;

function App() {
    return (
        <div>            
            <h1 className="headStyle">CSS Style By className</h1>
            <h1 style={headStyle}>CSS Style By Style Object</h1>
            <Title>Styled Component Example</Title>
            <Circle />
            <ParameterizedCircle color="blue" size="50px"/>
            <ParameterizedCircle color="red " size="10rem"/>
        </div>
    );
}

export default App;
