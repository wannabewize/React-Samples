function ABC(props) {
    return React.createElement(
        'h1',
        null,
        'Property Parameter Test'
    );
}

const Todo = ({ onClick, completed, text }) => React.createElement(
    'li',
    { onClick: onClick },
    text
);

function Comp1(prop) {
    console.log(`Com1 : ${prop.arg1}, ${prop.arg2}, ${prop.arg3}`);
    return React.createElement(
        'div',
        null,
        'Component1'
    );
}

function Comp2({ arg1, arg2, arg3 }) {
    console.log(`Com2 : ${arg1}, ${arg2}, ${arg3}`);
    return React.createElement(
        'div',
        null,
        'Component2'
    );
}

const Comp3 = ({ arg1, arg2, arg3 }) => {
    console.log(`Com3 : ${arg1}, ${arg2}, ${arg3}`);
    return React.createElement(
        'div',
        null,
        'Component2'
    );
};

ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(Comp1, { arg1: 'Hello', arg2: 'React', arg3: 1234 }),
    React.createElement(Comp2, { arg1: 'Hello', arg2: 'React', arg3: 1234 }),
    React.createElement(Comp3, { arg1: 'Hello', arg2: 'React', arg3: 1234 })
), document.getElementById('comptest'));
// ReactDOM.render(<Todo onClick={alert("comptest")} text={"YaHO"}/>, document.getElementById('comptest'));