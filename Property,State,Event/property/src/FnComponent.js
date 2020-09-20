import React from 'react';
import {ChildComponent} from './ChildComponent';

export const BasicFnComponent = ({boolValue, exist, numValue, numValue2, strValue, strValue2}) => {
    return (
        <div>
            <h1>Bool type property</h1>
            <ul>
                <li>boolValue : {boolValue == true ? "true" : "false"}</li>
                <li>exist : {exist == true ? "true" : "false"}</li>
            </ul>
            <h1>Number, String</h1>
            <ul>
                <li>numValue : {numValue}</li>
                <li>numValue2 : {numValue2}</li>
                <li>strValue : {strValue}</li>
                <li>strValue2 : {strValue2}</li>
            </ul>
            <h1>Child Component</h1>
            <ChildComponent numValue={numValue} strValue={strValue} />
        </div>
    )
}

export const FnComponent = ({arrValue, objValue, fnValue, nodeValue}) => {
    fnValue();
    return (
        <>
        <h1>Array, Object, Function, Node</h1>
        <ul>
            <li>arrValue.length : {arrValue.length}</li>
            <li>objValue - title : {objValue.title}, director : {objValue.director}</li>
            <li>fnValue : {typeof fnValue}</li>
            <li>nodeValue : {nodeValue}</li>
        </ul>        
        </>
    );
}