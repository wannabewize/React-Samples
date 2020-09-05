function UserGreeting(props) {
    return <h3>Hello User</h3>
}

function GuestGreeting(props) {
    return <h3>Hello Stranger</h3>
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);

        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false})
    }

    render() {
        let button;
        if ( this.state.isLoggedIn ) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        }
        else {
            button = <LoginButton onClick={this.handleLoginClick}/>
        }
        return (
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                {button}
            </div>
        ) 
    }
}

function Greeting(props) {
    if ( props.isLoggedIn ) {
        return <UserGreeting />
    }
    return <GuestGreeting />
}
ReactDOM.render( <LoginControl />, document.getElementById('login'));