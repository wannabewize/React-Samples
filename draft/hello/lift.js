class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = { temperature: '', scale: 'c' };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature) {
        this.setState({ scale: 'c', temperature });
    }

    handleFahrenheitChange(temperature) {
        this.setState({ scale: 'f', temperature });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale == 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale == 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return React.createElement(
            'div',
            null,
            React.createElement(TemperatureInput, {
                scale: 'c', temperature: celsius,
                onTemperatureChange: this.handleCelsiusChange }),
            React.createElement(TemperatureInput, {
                scale: 'f', temperature: fahrenheit,
                onTemperatureChange: this.handleFahrenheitChange })
        );
    }
}

const scaleNames = { c: '섭씨', f: '화씨' };

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // this.setState({ temperature: e.target.value });
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return React.createElement(
            'fieldset',
            null,
            React.createElement(
                'legend',
                null,
                ' ',
                scaleNames[scale],
                ' \uC628\uB3C4 \uC785\uB825'
            ),
            React.createElement('input', { value: temperature, onChange: this.handleChange })
        );
    }
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return React.createElement(
            'p',
            null,
            '\uBB3C\uC774 \uB053\uB294\uB2E4.'
        );
    } else {
        return React.createElement(
            'p',
            null,
            '\uBB3C\uC774 \uB053\uC9C0 \uC54A\uB294\uB2E4.'
        );
    }
}
ReactDOM.render(React.createElement(Calculator, null), document.getElementById('lifting'));