import React from 'react';

export const FunctionComponent = () => {
    function sayHello() {
        console.log('hello');
    }

    return (
        <div>
            <h3>Function Component</h3>
            <ul>
                <li><button onClick={sayHello}>버튼</button></li>
                <li><button onClick={ () => { sayHello() } }>버튼2</button></li>
            </ul>
        </div>
    )
}