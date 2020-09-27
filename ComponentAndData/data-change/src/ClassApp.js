import React from 'react';


class ClassApp extends React.Component {
    constructor(props) {
        super(props);
        this.classProperty = 0;
        this.state = {
            stateVal : 0
        }
    }
    classPrivateVal = 0;
    render() {
        return (
            <div>
            <h1>Class Component</h1>
            <ul>
                <li>
                    Class Private Value : {this.classPrivateVal}
                    <button onClick={() => this.classPrivateVal++ }>+</button>
                </li>
                <li>
                    Class Property Value : {this.classProperty}
                    <button onClick={() => this.classProperty++ }>+</button>
                </li> 
                <li>
                    State Value : {this.state.stateVal}
                    <button onClick={() => this.setState({stateVal: this.state.stateVal+1}) }>+</button>
                </li>                                
            </ul>            
            </div>
        )
    }
}

export default ClassApp;