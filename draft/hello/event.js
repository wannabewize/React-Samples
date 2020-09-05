
class EventElement extends React.Component {
    componentDidMount() {
        console.log("componentDidMount");
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h2",
                null,
                "Button Event"
            ),
            React.createElement(
                "button",
                { onClick: this.handleEvent },
                "Event example Button"
            ),
            React.createElement(
                "h2",
                null,
                "Form, submit"
            ),
            React.createElement(
                "form",
                { onSubmit: this.handleSubmit },
                React.createElement(
                    "button",
                    { onClick: this.handleEvent },
                    "Button in Form"
                ),
                React.createElement(
                    "button",
                    { type: "submit" },
                    "Submit Button"
                )
            )
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

ReactDOM.render(React.createElement(EventElement, null), document.getElementById('event'));

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
        this.toggleIt = this.toggleIt.bind(this);
    }

    toggleIt(e) {
        this.setState({
            isActive: !this.state.isActive
        });
    }

    toggleIt2(e) {
        this.setState({
            isActive: !this.state.isActive
        });
    }

    receiveArg(arg1, arg2, arg3) {
        console.log(`arg1: ${arg1}, arg2: ${arg2}, arg3: ${arg3}`);
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "button",
                { onClick: this.toggleIt },
                "This button is ",
                this.state.isActive ? 'ON' : 'OFF'
            ),
            React.createElement(
                "button",
                { onClick: e => this.toggleIt2(e) },
                "This button is ",
                this.state.isActive ? 'ON' : 'OFF'
            ),
            React.createElement("br", null),
            React.createElement("input", { value: id }),
            React.createElement(
                "button",
                { onClick: this.receiveArg },
                "Pass Arg"
            )
        );
    }
}

ReactDOM.render(React.createElement(ToggleButton, null), document.getElementById('toggle'));