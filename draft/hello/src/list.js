function List(props) {
    const numbers = props.numbers;
    let items = numbers.map( value => <li>item-{value}</li>);
    console.log(items);
    return (
        <ul>{items}</ul>    
    )
}

function NumberList(props) {
    const numbers = props.numbers;
    let items = numbers.map( (value, index, array) => {
        return (<li key={index} id={'item' + index}> {value*10} </li>)
    });
    return <ul>{items}</ul>
}
ReactDOM.render(<NumberList numbers={[1, 2, 3, 4, 5]} />, document.getElementById('list'));