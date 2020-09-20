import React from 'react';


export const FunctionComponent = () => {
    function sayHello(e) {
        console.log('hello');        
    }

    function preventEventDefaultBehavior(e) {
        console.log('Submit');
        // Event 동작 막기
        e.preventDefault();
    }

    // Change 이벤트
    function handleCheckChanged(e) {
        console.log('isChecked:', e.target.checked);
    }
    function handleValueChanged(e) {
        console.log('value changed:', e.target.value);
    }     

    // focus 이벤트
    function handleFocused(e) {
        console.log('focus event');
    }    

    function saySome(what, who) {
        console.log(what, who);
    }

    return (
        <div>
            <h3>Function Component</h3>
            <ul>
                <li><button onClick={sayHello}>클릭 이벤트</button></li>
                <li>change 이벤트 : <input type="checkbox" onChange={handleCheckChanged}/></li>
                <li><input type="text"
                        onChange={handleValueChanged}
                        onFocus={handleFocused}></input></li>
                <li><a href="https://google.com" onClick={sayHello}>링크 클릭 - 이벤트 동작, 링크 이동</a></li>
                <li><a href="https://google.com" onClick={preventEventDefaultBehavior}>링크 클릭 - 이벤트 동작, 링크 이동 막기</a></li>
                <li><button onClick={ () => { saySome('Hello', 'React.js') } }>커스텀 이벤트 핸들러</button></li>
            </ul>        
        </div>
    )
}