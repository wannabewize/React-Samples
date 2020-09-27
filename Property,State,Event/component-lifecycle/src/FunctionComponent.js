import React, {useState, useEffect} from 'react';

function ChildFunctionComponent({value1, value2}) {
    useEffect(() => {
        // value1이 변경될 때만 동작
        console.log('Child Function Component - value1 changed');
    }, [value1]);

    useEffect(() => {
        // mount, unmount, property, state 변경시마다 동작
        console.log('Child Function Component useEffect works');
    });

    return (
        <>
        <h3>Child Function Component</h3>
        <p>count: {count}</p>
        <p>props.value1 : {value1}</p>
        <p>props.value2 : {value2}</p>
        </>
    );
}

function FunctionComponent() {
    let [value1, setValue1] = useState(0);
    let [value2, setValue2] = useState(0);
    let [mount, setMount] = useState(true);

    useEffect(() => {
        console.log('Function Component useEffect works');
    });

    return (
        <div>
        <h1>Function Component</h1>
        <p>state.value1: {value1}, state.value2: {value2}</p>
        <button onClick={() => setValue1(value1+1) }>Increse1</button>
        <button onClick={() => setValue2(value2+1) }>Increse2</button>
        <button onClick={() => setMount(true) }>Mount</button>
        <button onClick={() => setMount(false) }>Unmount</button>

        { mount ?
            <ChildFunctionComponent value1={value1} value2={value2}/>
            : null
        }
        </div>
    );
}

export default FunctionComponent;