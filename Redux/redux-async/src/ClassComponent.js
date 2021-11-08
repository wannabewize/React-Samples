import React from 'react';
import { connect } from "react-redux";
import { increaseValue, increaseValueAsync } from "./Actions";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleIncreaseStateSync = this.handleIncreaseStateSync.bind(this);    
        this.handleIncreaseStateAsync = this.handleIncreaseStateAsync.bind(this);    
        this.handleIncreaseReduxAsync = this.handleIncreaseReduxAsync.bind(this);
        this.state = { stateValue: 0 }
    }

    // 동기식 State 변경
    handleIncreaseStateSync() {
        this.setState({stateValue: this.state.stateValue + 1})
    }

    // 비동기식 State 변경
    handleIncreaseStateAsync() {
        console.log("increase state valua asynchronously");
        setTimeout( () => {
            this.setState({stateValue: this.state.stateValue + 1})
        }, 2000);
    }

    // 비동기식 클로변 데이터 변경
    handleIncreaseReduxAsync() {
        increaseValueAsync(this.props.dispatch, 1);
    }

    render() {                
        return (
            <div>
                <h3>Redux Async Task - Class Component</h3>                
                <ul>
                    <li>Local Value : {this.state.stateValue}</li>
                    <li>Global Value ( in Store ) : {this.props.globalValue}</li>
                    <li>
                        <button onClick={this.handleIncreaseStateSync}>Increase Local Value Sync!!</button>
                    </li>
                    <li>
                        <button onClick={this.handleIncreaseStateAsync}>Increase Local Value Async!!</button>
                    </li>
                    <li>
                        <button onClick={this.handleIncreaseReduxAsync}>Increase Global Value Async!! </button>
                    </li>
                </ul>                
            </div>            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        globalValue: state.value
    }
}

export default connect(mapStateToProps)(ClassComponent);