import React from 'react';
import { connect } from "react-redux";
import { increaseValue, increaseValueAsync } from "./Actions";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleIncreaseStateAsync = this.handleIncreaseStateAsync.bind(this);    
        this.handleIncreaseReduxAsync = this.handleIncreaseReduxAsync.bind(this);
        this.state = { stateValue: 0 }
    }
    handleIncreaseStateAsync() {
        console.log("increase state valua asynchronously");
        setTimeout( () => {
            this.setState({stateValue: this.state.stateValue + 1})
        }, 1000);
    }

    handleIncreaseReduxAsync() {
        increaseValueAsync(this.props.dispatch, 1);
    }

    render() {        
        console.log('prosp :', this.props);
        return (
            <div>
                <h3>React - Redux Async Class Component</h3>                
                <ul>
                    <li>State - Value : {this.state.stateValue}</li>
                    <li>Property - Value : {this.props.value}</li>
                    <li>
                        <button onClick={this.handleIncreaseStateAsync}>Increase State Async!!</button>
                    </li>
                    <li>
                        <button onClick={this.handleIncreaseReduxAsync}>Increase Props Async!! </button>
                    </li>
                </ul>                
            </div>            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.value
    }
}

export default connect(mapStateToProps)(ClassComponent);