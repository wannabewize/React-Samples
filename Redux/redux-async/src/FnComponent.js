import React, {useState} from 'react';
import { connect } from "react-redux";
import { increaseValue, increaseValueAsync } from "./Actions";

function FnComponent({ globalValue, dispatch }) {
    let [value, setValue] = useState(0);

    const increseLocalValue = () => {
        setTimeout( () => {
            setValue(value+1);
        }, 2000);
    }
    const increaseGlobalValue = () => {
        increaseValueAsync(dispatch, 1);
    }
    return (
        <div>
            <h3>Redux Async Task - Function Component - 1</h3>
            <ul>
                <li>Local Value : {value}</li>
                <li>Global Value ( in Store ) : {globalValue}</li>                
                <li>
                    <button onClick={increseLocalValue}>Increase Local Value Async!!</button>
                </li>
                <li>
                    <button onClick={increaseGlobalValue}>Increase Global Value Async!! </button>
                </li>                
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        globalValue: state.value
    }
}

export default connect(mapStateToProps)(FnComponent);
