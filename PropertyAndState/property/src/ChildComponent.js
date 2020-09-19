import React from 'react';


export const ChildComponent = (values) => {
    return (
        <ul>
            <li>numValue: {values.numValue}</li>
            <li>strValue: {values.strValue}</li>
        </ul>
    )
}