class NameForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: 'xxx' }

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
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type='text' defaultValue='Steve' ref={this.input} />
                </label>
                <button type='sumbit'>Submit</button>
            </form>
        )
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
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Upload file:
                    <input type="file" ref={this.fileInput} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

// ReactDOM.render(<NameForm />, document.getElementById('form'))
ReactDOM.render(<FileForm />, document.getElementById('form'));