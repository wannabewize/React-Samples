import React from 'react';

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objState: {value: 'default value'},
            key: null, value: null, // Object Type 상태 추가를 위한 키/밸류 상태값

            arrState: ["a", "b", "c"],
            arrItem: null,
        }
        this.handleObjectInput = this.handleObjectInput.bind(this);
        this.handleArrayInput = this.handleArrayInput.bind(this);
    }

    handleObjectInput() {
        let newObjState = {...this.state.objState};
        newObjState[this.state.key] = this.state.value;
        this.setState({objState: newObjState});        
    }

    handleArrayInput() {
        // 기존 상태값(배열) 복제
        let newArrState = [...this.state.arrState];
        newArrState.push(this.state.arrItem);
        this.setState({arrState: newArrState});
    }

    render() {        
        return (
            <>
            <h3>Object Type State Change</h3>
            <div>Object State : {JSON.stringify(this.state.objState)}</div>
            <div>
                Key :  <input onChange={e => this.setState({key: e.target.value})}/>
                Value :  <input onChange={e => this.setState({value: e.target.value})}/>
                <button onClick={this.handleObjectInput}>입력</button>
            </div>

            <h3>Array Type</h3>
            <div>Array State : {JSON.stringify(this.state.arrState)}</div>
            <div>
                Array Addtional Item : <input onChange={e => this.setState({arrItem: e.target.value})} />
                <button onClick={this.handleArrayInput}>배열에 추가</button>
            </div>
            </>
        );
    }
}

export default ClassComponent;