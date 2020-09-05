class NameForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: 'xxx' };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);

        this.input = React.createRef();
    }

    handleSubmit(e) {
        // alert('Submit! value : ' + this.state.value);
        alert('Submit! ' + this.input.current.value);
        console.log('this.input :', this.input);
        e.preventDefault();
    }

    // handleChange(e) {
    //     this.setState({value: e.target.value});
    //     console.log('handle change : ', e.target.value);
    // }

    render() {
        return React.createElement(
            'form',
            { onSubmit: this.handleSubmit },
            React.createElement(
                'label',
                null,
                'Name:',
                React.createElement('input', { type: 'text', defaultValue: 'Steve', ref: this.input })
            ),
            React.createElement(
                'button',
                { type: 'sumbit' },
                'Submit'
            )
        );
    }
}

class FileForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.fileInput = React.createRef();
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`selected file ${this.fileInput.current.files[0].name}`);
    }

    render() {
        return React.createElement(
            'form',
            { onSubmit: this.handleSubmit },
            React.createElement(
                'label',
                null,
                'Upload file:',
                React.createElement('input', { type: 'file', ref: this.fileInput })
            ),
            React.createElement('br', null),
            React.createElement(
                'button',
                { type: 'submit' },
                'Submit'
            )
        );
    }
}

// ReactDOM.render(<NameForm />, document.getElementById('form'))
ReactDOM.render(React.createElement(FileForm, null), document.getElementById('form'));