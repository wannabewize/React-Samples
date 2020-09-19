import React from 'react';

export class ClassComponent extends React.Component {
    sayHello() {
        console.log('hello');
    }

    render() {
        return (
            <div>
                <h3>Class Component</h3>
                <ul>
                    <li><button onClick={this.sayHello}>버튼</button></li>
                    <li><button onClick={ () => { this.sayHello() } }>버튼2</button></li>
                </ul>
            </div>
        )
    }
}