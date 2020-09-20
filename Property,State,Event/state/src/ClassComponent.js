import React from 'react';

export class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.decreaseState = this.decreaseState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            value: 100,
            input: 'Initial',
            isChecked: true,
            selected: 'react'
        }
    }

    decreaseState() {
        console.log('increaseState works');
        this.setState({
            value: this.state.value - 1,
        })
    }

    handleSubmit(e) {
        alert(`
        input: ${this.state.input},
        isChecked: ${this.state.isChecked ? 'true':'false'},
        selected: ${this.state.selected}`);
        e.preventDefault();
    }    

    render() {
        return (
            <>
            <h3>Class Component</h3>
            <ul>
                <li>상태 value : {this.state.value}</li>
                <li><button onClick={() => {
                    this.setState({value: this.state.value+1})}}>상태값 증가</button></li>
                <li><button onClick={this.decreaseState}>상태값 감소</button></li>
            </ul>
            <form onSubmit={this.handleSubmit}>
                <h4>Form</h4>
                <ul>
                <li>입력값 : <input 
                    value={this.state.input}
                    onChange={ e => { this.setState({input: e.target.value})}}/></li>
                <li>입력값 상태 : {this.state.input}</li>

                <li>체크 : <input
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange = { e => {this.setState({isChecked: !this.state.isChecked})}}/>                    
                    상태 : {this.state.isChecked ? "true" : "false"}
                </li>
                <li>
                    <select                     
                        value={this.state.selected}
                        onChange={e => this.setState({selected: e.target.value})}>
                        <option value='node'>Node.js</option>
                        <option value='react'>React.js</option>
                        <option value='rn'>ReactNative</option>
                    </select>
                    상태값 : {this.state.selected}
                </li>  
                </ul>
            <button type="submit">Submit</button>
            </form>
            </>        
        )
    }
}