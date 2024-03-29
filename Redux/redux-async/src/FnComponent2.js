import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increaseValueAsync } from "./Actions";

function FnComponent2() {
    const [value, setValue] = useState(0);

    const globalValue = useSelector( state => { return state.value; })
    const dispatch = useDispatch();

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
            <h3>Redux Async Task - Function Component - 2</h3>
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

export default FnComponent2;