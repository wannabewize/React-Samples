import React from 'react';
import { connect } from "react-redux";
import { increaseValue, decreaseValue } from "./Actions";

function FnComponent({ value, increaseOne, decreaseOne}) {
    return (
        <div>
            <h3>React - Redux Function Component.</h3>
            <ul>
                <li>Value : {value}</li>
                <li>
                    <button onClick={increaseOne}>Increase</button>
                    <input value={1} />
                </li>
                <li>
                    <button onClick={ decreaseOne }>Decrease </button>
                    <input value={1} />
                </li>
            </ul>
        </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(FnComponent);
