import React from 'react';
import { connect } from "react-redux";

class ClassComponent extends React.Component {
    render() {        
        return (
            <div>
            <h3>React - Redux Class Component</h3>
            <div>Value : {this.props.value}</div>
            </div>            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.value
    }
}

export default connect(mapStateToProps)(ClassComponent);