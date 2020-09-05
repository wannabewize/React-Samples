// Babel with JSX
const e = React.createElement;

function App() {
  return React.createElement("h1", null, "Hello React Web with Babel, Step2!");
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));