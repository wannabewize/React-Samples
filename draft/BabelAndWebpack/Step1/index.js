// babel 없이 JSX 인식이 안된다. createElement 함수를 사용해야 한다.
// https://reactjs.org/docs/react-api.html#createelement
// React.createElement(type, [props], [...children])

const e = React.createElement;
function App() {
    return e('h1', null, 'Hello React Web!');
}

// JSX 포맷 대신 createElement 사용
// ReactDOM.render(<App />, document.getElementById('root') ); 
ReactDOM.render(e(App), document.getElementById('root') );