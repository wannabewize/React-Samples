'use strict'

const element = <h1>Hello, World</h1>;

class Clock extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timer = setInterval( () => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({date: new Date() });
    }

    render() {
        return (
            <FormattedDate date={this.state.date}/>
        );
    }
}

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}</h2>
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);