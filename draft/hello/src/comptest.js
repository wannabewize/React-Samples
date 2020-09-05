function ABC(props) {    
    return <h1>Property Parameter Test</h1>
}

const Todo = ({onClick, completed, text}) => (
    <li onClick={onClick}>
        {text}
    </li>
)

function Comp1( prop ) {
    console.log(`Com1 : ${prop.arg1}, ${prop.arg2}, ${prop.arg3}`)
    return <div>Component1</div>
}


function Comp2( {arg1, arg2, arg3} ) {
    console.log(`Com2 : ${arg1}, ${arg2}, ${arg3}`)
    return <div>Component2</div>
}

const Comp3 = ( {arg1, arg2, arg3} ) => {
    console.log(`Com3 : ${arg1}, ${arg2}, ${arg3}`)
    return <div>Component2</div>
}


ReactDOM.render(<div>
    <Comp1 arg1={'Hello'} arg2={'React'} arg3={1234} />
    <Comp2 arg1={'Hello'} arg2={'React'} arg3={1234} />
    <Comp3 arg1={'Hello'} arg2={'React'} arg3={1234} />
</div>, document.getElementById('comptest'));
// ReactDOM.render(<Todo onClick={alert("comptest")} text={"YaHO"}/>, document.getElementById('comptest'));