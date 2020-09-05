function UserGreeting(props) {
    return React.createElement(
        'h3',
        null,
        'Hello User'
    );
}

function GuestGreeting(props) {
    return React.createElement(
        'h3',
        null,
        'Hello Stranger'
    );
}

function LoginButton(props) {
    return React.createElement(
        'button',
        { onClick: props.onClick },
        'Login'
    );
}

function LogoutButton(props) {
    return React.createElement(
        'button',
        { onClick: props.onClick },
        'Logout'
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
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        let button;
        if (this.state.isLoggedIn) {
            button = React.createElement(LogoutButton, { onClick: this.handleLogoutClick });
        } else {
            button = React.createElement(LoginButton, { onClick: this.handleLoginClick });
        }
        return React.createElement(
            'div',
            null,
            React.createElement(Greeting, { isLoggedIn: this.state.isLoggedIn }),
            button
        );
    }
}

function Greeting(props) {
    if (props.isLoggedIn) {
        return React.createElement(UserGreeting, null);
    }
    return React.createElement(GuestGreeting, null);
}
ReactDOM.render(React.createElement(LoginControl, null), document.getElementById('login'));