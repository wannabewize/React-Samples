import React from 'react';

export class MyComponent extends React.Component {
    render() {
        console.log('non_exist :', this.props.non_exist);        
        this.props.fnValue();
        console.log( this.props.fnValue2() );
        return (
            <div>
                <h1>Bool type property</h1>
                <ul>
                    <li>boolValue : {this.props.boolValue == true ? "true" : "false"}</li>
                    <li>exist : {this.props.exist == true ? "true" : "false"}</li>
                    <li>non_exist : {this.props.non_exist == true ? "true" : "false"}</li>
                </ul>
                <h1>Number, String</h1>
                <ul>
                    <li>numValue : {this.props.numValue}</li>
                    <li>numValue2 : {this.props.numValue2}</li>
                    <li>strValue : {this.props.strValue}</li>
                    <li>strValue2 : {this.props.strValue2}</li>
                </ul>
                <h1>Array, Object, Function, Node</h1>
                <ul>
                    <li>arrValue : {this.props.arrValue}</li>
                    <li>arrValue2 : {this.props.arrValue2}</li>
                    <li>objValue - title : {this.props.objValue.title}, director : {this.props.objValue.director}</li>
                    <li>objValue2 : {JSON.stringify(this.props.objValue2)}</li>
                    <li>fnValue : {typeof this.props.fnValue}</li>
                    <li>fnValue2 : {this.props.fnValue2()}</li>
                    <li>nodeValue : {this.props.nodeValue}</li>
                    <li>nodeValue2 : {this.props.nodeValue2}</li>
                </ul>
            </div>
        )
    }
}