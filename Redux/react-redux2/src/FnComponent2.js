import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increaseValue, decreaseValue } from "./Actions";

function FnComponent2() {
    const value = useSelector( state => { return state.value});
    const dispatch = useDispatch();
    return (
        <div>
            <h3>React - Redux Function Component. with useSelector Hook</h3>
            <ul>
                <li>Value : {value}</li>
                <li>
                    <button onClick={() => {dispatch(increaseValue(1))}}>Increase</button>
                    <input value={1} />
                </li>
                <li>
                    <button onClick={() => dispatch(decreaseValue(1))}>Decrease</button>
                    <input value={1} />
                </li>
            </ul>
        </div>
    );
}

export default FnComponent2;