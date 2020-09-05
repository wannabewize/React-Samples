'use strict';

const element = React.createElement(
    'h1',
    null,
    'Hello, World'
);

class Clock extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return React.createElement(FormattedDate, { date: this.state.date });
    }
}

function FormattedDate(props) {
    return React.createElement(
        'h2',
        null,
        'It is ',
        props.date.toLocaleTimeString()
    );
}

ReactDOM.render(React.createElement(Clock, null), document.getElementById('root'));