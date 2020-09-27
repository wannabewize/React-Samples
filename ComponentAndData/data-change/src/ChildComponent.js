import React from 'react';

export function ChildFnComponent({value}) {
    return (
        <>
            {value}
        </>
    )
}

export function ChildEventFnComponent({value, increaseFn}) {
    return (
        <>
            {value}
            <button onClick={() => increaseFn() }>+</button>
        </>
    )
}

export class ChildClassComponent extends React.Component {
    render() {
        return (
            <>
                {this.props.value}
            </>
        )
    }
}

export class ChildEventClassComponent extends React.Component {
    render() {
        return (
            <>
                {this.props.value}
                <button onClick={() => this.props.increaseFn() }>+</button>
            </>
        )
    }
}

export function SiblingComponent({value}) {
    return (
        <>
            {value}
        </>
    )    
}