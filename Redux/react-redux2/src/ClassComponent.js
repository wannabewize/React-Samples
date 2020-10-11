import React from 'react';
import { connect } from "react-redux";
import { increaseValue, decreaseValue } from "./Actions";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleIncrease = this.handleIncrease.bind(this);
    }
    handleIncrease() {
        this.props.increaseOne();
    }
    render() {        
        console.log('prosp :', this.props);
        return (
            <div>
                <h3>React - Redux Class Component</h3>                
                <ul>
                    <li>Value : {this.props.value}</li>
                    <li>
                        <button onClick={this.handleIncrease}>Increase!!</button>
                        <input value={1}  />
                    </li>
                    <li>
                        <button onClick={this.props.decreaseOne}>Decrease </button>
                        <input value={1} />
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

const mapDispatchToProps = dispatch => {
    return {
        increaseOne: () => {
            dispatch(increaseValue(1))
        },
        decreaseOne: () => {
            dispatch(decreaseValue(1))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassComponent);