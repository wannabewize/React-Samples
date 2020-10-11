import React from "react";
import { useHistory, withRouter } from "react-router-dom";

export function HistoryFn() {
    const history = useHistory();
    console.log('history:', history);

    return (
        <div>
        <h2>History - Function Component</h2>
        <button onClick={() => {history.goBack()}}>go Back</button>
        <button onClick={() => {history.push("/movies")}}>go Movies</button>
        </div>
    )
}

class HistoryClassComponent extends React.Component {
    render() {
        const history = this.props.history;
    
        return (
            <div>
            <h2>History - Class Component</h2>
            <button onClick={() => {history.goBack()}}>go Back</button>
            <button onClick={() => {history.push("/movies")}}>go Movies</button>
            </div>
        )
    }
}
export const HistoryClass = withRouter(HistoryClassComponent);