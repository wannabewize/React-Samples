import React from 'react';

class ChildClassComponent extends React.Component {
    constructor() {
        super();
        console.log('Child Class Component - constructor');
    }

    componentDidMount() {
        console.log('Child Class Component - componentDidMount');
    }

    componentWillUnmount() {
        console.log('Child Class Component - componentWillUnmount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Class Component - shouldComponentUpdate', nextProps, nextState);
        if ( nextProps.value % 2 == 0 )
            return true;
        else
            return false;
    }

    render() {
        console.log('Class Component - render');
        return (
            <>
                <h3>Child Class Component</h3>
                <p>props.value : {this.props.value} ( 짝수일 경우에만 변경 )</p>
            </>
        );
    }
}

class ClassComponent extends React.Component {
    constructor() {
        super();
        console.log('Class Component - constructor');
        this.state = {
            value: 0,
            mount: true
        }
    }

    componentDidMount() {
        console.log('Class Component - componentDidMount');
    }

    componentWillUnmount() {
        console.log('Class Component - componentWillUnmount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Class Component - shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    render() {
        console.log('Class Component - render');
        return (
            <div>
            <h1>Class Component</h1>
            <p>state.value : {this.state.value}</p>
            <button onClick={() => this.setState({value: this.state.value + 1})}>Increse</button>
            <button onClick={() => this.setState({mount: true})}>Mount</button>
            <button onClick={() => this.setState({mount: false})}>Unmount</button>
            { this.state.mount ? 
                <ChildClassComponent value={this.state.value}/>
                : null
            }
            </div>
        );
    }
}

export default ClassComponent;
