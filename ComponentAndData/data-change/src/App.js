import React, { useState } from 'react';
import {ChildFnComponent, ChildClassComponent, ChildEventFnComponent, ChildEventClassComponent, SiblingComponent } from "./ChildComponent";


function App() {
    let localVal = 0;

    let [stateVal, setStateVal] = useState(0);
    let [childVal, setChildVal] = useState(0);
    let [childVal2, setChildVal2] = useState(0);
    let [childVal3, setChildVal3] = useState(0);
    let [childVal4, setChildVal4] = useState(0);

    return (
        <div>
            <h1>Function Component</h1>     
            {/* 컴포넌트에 선언한 변수를 사용하는 경우 - 값 변경, 반영 안됨. */}                
            <h5>로컬 변수 선언과 변경 - 반영 여부 테트</h5>
            <div>Function local Variable : {localVal} <button onClick={() => localVal++ }>+</button></div>

            {/* State를 이용한 값 출력, 값 변경 반영 됨. */}
            <h5>State 선언과 변경 - 반영 여부 테트</h5>
            <div>State Value : {stateVal} <button onClick={() => setStateVal(stateVal+1) }>+</button></div>

            {/* 자식 함수형 컴포넌트에 프로퍼티로 상태값 전달. 부모 컴포넌트에서 상태 변경. 자식 컴포넌트의 값 변경 확인 */}
            <h5>자식 컴포넌트로 State 전달, State 값 변경</h5>
            <div>Child Fn-Component Property Value :
                <ChildFnComponent value={childVal}/>
                <button onClick={() => setChildVal(childVal+1) }>+</button>
            </div>

            {/* 자식 클래스 컴포넌트에 프로퍼티로 상태값 전달. 부모 컴포넌트에서 상태 변경. 자식 컴포넌트의 값 변경 반영 */}
            <h5>자식 컴포넌트로 State 전달, 자식 컴포넌트에서 State 값 변경</h5>
            <div>Child Class-Component Property Value :
                <ChildClassComponent value={childVal2}/>
                <button onClick={() => setChildVal2(childVal2+1) }>+</button></div>

            {/* 자식 함수형 컴포넌트에 프로퍼티로 상태값 전달. 부모 컴포넌트에서 상태 변경. 자식 컴포넌트에서 이벤트 - 부모 컴포넌트에서 상태값 변경 - 자식 컴포넌트에 값 변경 확인 */}
            <h5>자식 컴포넌트로 State, 함수 전달, 자식 컴포넌트에서 함수로 부모 컴포넌트로 이벤트 발생</h5>
            <div>Child Fn-Component Property Value, Event :
                <ChildEventFnComponent value={childVal3} increaseFn={ () => setChildVal3(childVal3+1) }/>
            </div>

            {/* 형제 컴포넌트에서 값 변경 확인 */}
            <h5>부모 컴포넌트의 State를 공유하는 형제 컴포넌트</h5>
            <div>Sibling Component :
                <SiblingComponent value={childVal3} />
            </div>

            {/* 자식 클래스 컴포넌트에 프로퍼티로 상태값 전달. 부모 컴포넌트에서 상태 변경. 자식 컴포넌트에서 이벤트 - 부모 컴포넌트에서 상태값 변경 - 자식 컴포넌트에 값 변경 확인 */}
            <h5>???</h5>
            <div>Child Class-Component Property Value, Event :
                <ChildEventClassComponent value={childVal4} increaseFn={ () => setChildVal4(childVal4+1) }/>
            </div>
        </div>
    );
}

export default App;
