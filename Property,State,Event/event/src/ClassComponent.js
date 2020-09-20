import React from 'react';

export class ClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.increaseValue = this.increaseValue.bind(this);
        this.state = { value: 10 }

    }

    sayHello(e) {        
        console.log('hello');
        console.log('event type:', e.type);
        // console.log(e);        
    }

    preventEventDefaultBehavior(e) {
        console.log('event fired:', e.type);
        // Event 동작 막기
        e.preventDefault();
    }

    // Change 이벤트
    handleCheckChanged(e) {
        console.log('isChecked:', e.target.checked);
    }
    handleValueChanged(e) {
        console.log('value changed:', e.target.value);
    }    

    saySome(what, who) {
        console.log(what, who);
    }

    // focus 이벤트
    handleFocused(e) {
        console.log('focus event');
    }

    increaseValue(e) {
        this.setState({value: this.state.value+1});
    }

    render() {
        return (
            <div>
                <h3>Class Component</h3>
                <ul>
                    <li><button onClick={this.sayHello}>버튼</button></li>
                    <li>change 이벤트 : <input type="checkbox" onChange={this.handleCheckChanged}/></li>
                    <li><input type="text"
                        onChange={this.handleValueChanged}
                        onFocus={this.handleFocused}></input></li>
                    <li><a href="https://google.com" onClick={this.sayHello}>링크 클릭 - 이벤트 동작, 링크 이동</a></li>
                    <li><a href="https://google.com" onClick={this.preventEventDefaultBehavior}>링크 클릭 - 이벤트 동작, 링크 이동 막기</a></li>
                    <li><button onClick={ () => { this.saySome('Hello', 'React.js') } }>커스텀 이벤트 핸들러</button></li>
                </ul>                
            </div>
        )
    }
}