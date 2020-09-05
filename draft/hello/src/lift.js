class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = { temperature: '', scale: 'c' };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature
        const celsius = scale == 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale == 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale='c' temperature={celsius} 
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale='f' temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
            </div>
        )
    }
}

const scaleNames = { c: '섭씨', f: '화씨' };

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
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
        const temperature = this.props.temperature
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend> {scaleNames[scale]} 온도 입력</legend>
                <input value={temperature} onChange={this.handleChange} />            
            </fieldset>
        )
    }
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓는다.</p>
    }
    else {
        return <p>물이 끓지 않는다.</p>
    }
}
ReactDOM.render(<Calculator />, document.getElementById('lifting'));