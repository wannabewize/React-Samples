function List(props) {
    const numbers = props.numbers;
    let items = numbers.map(value => React.createElement(
        'li',
        null,
        'item-',
        value
    ));
    console.log(items);
    return React.createElement(
        'ul',
        null,
        items
    );
}

function NumberList(props) {
    const numbers = props.numbers;
    let items = numbers.map((value, index, array) => {
        return React.createElement(
            'li',
            { key: index, id: 'item' + index },
            ' ',
            value * 10,
            ' '
        );
    });
    return React.createElement(
        'ul',
        null,
        items
    );
}
ReactDOM.render(React.createElement(NumberList, { numbers: [1, 2, 3, 4, 5] }), document.getElementById('list'));