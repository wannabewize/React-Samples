import React, {useState, useEffect} from 'react';

function ChildFunctionComponent({value}) {
    useEffect(() => {
        console.log('Child Function Component useEffect works');
    });

    return (
        <>
        <h3>Child Function Component</h3>
        <p>props.value : {value}</p>
        </>
    );
}

function FunctionComponent() {
    let [value, setValue] = useState(0);
    let [mount, setMount] = useState(true);

    useEffect(() => {
        console.log('Function Component useEffect works');
    });

    return (
        <div>
        <h1>Function Component</h1>
        <p>state.value: {value}</p>
        <button onClick={() => setValue(value+1) }>Increse</button>
        <button onClick={() => setMount(true) }>Mount</button>
        <button onClick={() => setMount(false) }>Unmount</button>

        { mount ?
            <ChildFunctionComponent value={value}/>
            : null
        }
        </div>
    );
}

export default FunctionComponent;