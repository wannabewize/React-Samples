import React, {useState} from 'react';

function ChildComponent({objProperty}) {
    return (
        <>{JSON.stringify(objProperty)}</>
    )
}

function FunctionComponent() {    
    let [objState, setObjState] = useState({value: 'default value'});
    let [key, setKey] = useState();
    let [value, setValue] = useState();

    let [arrState, setArrState] = useState(["a", "b", "c"]);
    let [arrItem, setArrItem] = useState(null);

    function handleObjectInput() {
        // 기존 상태값 복제
        let newObjState = {...objState};
        newObjState[key] = value;
        setObjState(newObjState);        
    }

    function handleArrayInput() {
        // 기존 상태값(배열) 복제
        let newArrState = [...arrState];
        newArrState.push(arrItem);
        setArrState(newArrState);
    }

    return (
        <>            
            <h3>Object Type State Change</h3>
            <div>Object State : {JSON.stringify(objState)}</div>
            <div>
                Key :  <input onChange={e => setKey(e.target.value)}/>
                Value :  <input onChange={e => setValue(e.target.value)}/>
                <button onClick={handleObjectInput}>입력</button>
            </div>
            <div>
                Child Component Property : <ChildComponent objProperty={objState}/>
            </div>

            <h3>Array Type</h3>
            <div>Array State : {JSON.stringify(arrState)}</div>
            <div>
                Array Addtional Item : <input onChange={e => setArrItem(e.target.value)} />
                <button onClick={handleArrayInput}>배열에 추가</button>
            </div>
            <div>
                Child Component Property : <ChildComponent objProperty={arrState}/>
            </div>

        </>
    );
}

export default FunctionComponent;
