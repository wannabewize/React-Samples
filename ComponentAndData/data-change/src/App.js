import React, { useState } from 'react';

function ChildFnComponent({value}) {
    return (
        <>
            {value}
        </>
    )
}

function ChildEventFnComponent({value, increaseFn}) {
    return (
        <>
            {value}
            <button onClick={() => increaseFn() }>+</button>
        </>
    )
}

class ChildClassComponent extends React.Component {
    render() {
        return (
            <>
                {this.props.value}
            </>
        )
    }
}

class ChildEventClassComponent extends React.Component {
    render() {
        return (
            <>
                {this.props.value}
                <button onClick={() => this.props.increaseFn() }>+</button>
            </>
        )
    }
}

function SiblingComponent({value}) {
    return (
        <>
            {value}
        </>
    )    
}

function App() {
    let justVal = 0;

    let [stateVal, setStateVal] = useState(0);
    let [childVal, setChildVal] = useState(0);
    let [childVal2, setChildVal2] = useState(0);
    let [childVal3, setChildVal3] = useState(0);
    let [childVal4, setChildVal4] = useState(0);

    return (
        <div>
            <ul>
                {/* 컴포넌트에 선언한 변수를 사용하는 경우 - 값 변경, 반영 안됨. */}
                <li>Just Variable : {justVal} <button onClick={() => justVal++ }>+</button></li>

                {/* State를 이용한 값 출력, 값 변경 반영 됨. */}
                <li>State Value : {stateVal} <button onClick={() => setStateVal(stateVal+1) }>+</button></li>
                {/* State를 자식 컴포넌트의 프로퍼티로 전달. 부모 컴포넌트에서 값 바꾸기. 자식 컴포넌트에 변경된 값 반영 */}
                <li>Child Fn-Component Property Value :
                    <ChildFnComponent value={childVal}/>
                    <button onClick={() => setChildVal(childVal+1) }>+</button></li>
                <li>Child Class-Component Property Value :
                    <ChildClassComponent value={childVal2}/>
                    <button onClick={() => setChildVal2(childVal2+1) }>+</button></li>
                <li>Child Fn-Component Property Value, Event :
                    <ChildEventFnComponent value={childVal3} increaseFn={ () => setChildVal3(childVal3+1) }/>
                </li>
                <li>Sibling Component :
                    <SiblingComponent value={childVal3} />
                </li>
                <li>Child Class-Component Property Value, Event :
                    <ChildEventClassComponent value={childVal4} increaseFn={ () => setChildVal4(childVal4+1) }/>
                </li>
            </ul>
        </div>
    );
}

export default App;
