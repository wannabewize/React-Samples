import React from 'react';
import { connect } from "react-redux";

function FnComponent({value}) {
    return (
        <div>
            <h3>React - Redux Function Component.</h3>
            <div>Value : {value}</div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        value: state.value
    }
}

export default connect(mapStateToProps)(FnComponent);
