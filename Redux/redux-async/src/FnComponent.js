import React, {useState} from 'react';
import { connect } from "react-redux";
import { increaseValue, increaseValueAsync } from "./Actions";

function FnComponent({ globalValue, dispatch }) {
    let [value, setValue] = useState(0);

    const handleIncreaseStateSync = () => {
        setValue(value+1);
    }

    const increaseLocalValue = () => {
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
                    <button onClick={handleIncreaseStateSync}>Increase Local Value Sync!!</button>
                </li>                           
                <li>
                    <button onClick={increaseLocalValue}>Increase Local Value Async!!</button>
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

// connect 함수는 dispatch를 프로퍼티로 전달
export default connect(mapStateToProps)(FnComponent);
