import React, {useState, useEffect} from 'react';

function ChildFunctionComponent({value1, value2}) {
    // mount, unmount, property, state 변경시마다 동작
    useEffect(() => {
        console.log('Child Function Component useEffect works');
    });

<<<<<<< HEAD:Property,State,Event/component-lifecycle/src/FunctionComponent.js
    // componentDidMount에 해당
    useEffect(()=>{
        console.log('Child Function Component useEffect([]) works');
        // componentWillUnmount에 해당
        return () => {
            console.log('Child Function Component useEffect([]) works. unmount')
        }        
    }, []);

    // Property - value2이 변경될 때만 동작
    useEffect(() => {
        console.log('Child Function Component useEffect([value2]) works');
    }, [value2]);
=======
    useEffect(() => {        
        console.log('Child Function Component did Mount');
        return () => {
          console.log('Child Function Component will Unmount')
        }
    }, []);    
>>>>>>> 928d0e446075e45f73a29f522f69e01780581e05:ComponentAndData/component-lifecycle/src/FunctionComponent.js

    return (
        <>
        <h3>Child Function Component</h3>        
        <p>props.value1 : {value1}</p>
        <p>props.value2 : {value2}</p>
        </>
    );
}

function FunctionComponent() {
    let [value1, setValue1] = useState(0);
    let [value2, setValue2] = useState(0);
    let [mount, setMount] = useState(true);

    // 모든 변경에 동작
    useEffect(() => {
        console.log('Function Component useEffect works');
    });

    // State - value1이 변경될 때만 동작
    useEffect(() => {
        console.log('Function Component useEffect([value1]) works');
    }, [value1]);    

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