import React from 'react';
import { useSelector } from "react-redux";

function FnComponent2() {
    const value = useSelector( state => { return state.value});
    return (
        <div>
            <h3>React - Redux Function Component. with useSelector Hook</h3>
            <div>Value : {value}</div>
        </div>
    );
}

export default FnComponent2;