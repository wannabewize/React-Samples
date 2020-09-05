
class EventElement extends React.Component {
    componentDidMount() {
        console.log("componentDidMount");
    }

    render() {
        return (
            <div>
                <h2>Button Event</h2>

                <button onClick={this.handleEvent}>Event example Button</button>            
                <h2>Form, submit</h2>
                <form onSubmit={this.handleSubmit}>
                    <button onClick={this.handleEvent}>Button in Form</button>
                    <button type="submit">Submit Button</button>                                
                </form>
            </div>
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("handle Submit :", e);    
    }
    
    handleEvent(e) {
        e.preventDefault();
        console.log('event object :', e);
    }    
}

ReactDOM.render(<EventElement />, document.getElementById('event'));


class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
        this.toggleIt = this.toggleIt.bind(this);
    }

    toggleIt(e) {
        this.setState({
            isActive: !this.state.isActive,
        })
    }

    toggleIt2(e) {
        this.setState({
            isActive: !this.state.isActive,
        })
    }

    receiveArg(arg1, arg2, arg3) {
        console.log(`arg1: ${arg1}, arg2: ${arg2}, arg3: ${arg3}`)
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleIt}>This button is {this.state.isActive ? 'ON' : 'OFF'}</button>            
                <button onClick={ (e) => this.toggleIt2(e) }>This button is {this.state.isActive ? 'ON' : 'OFF'}</button>            
                <br />
                <input value={id}></input>
                <button onClick={this.receiveArg}>Pass Arg</button>
            </div>
        );
    }
}

ReactDOM.render(<ToggleButton />, document.getElementById('toggle') );
