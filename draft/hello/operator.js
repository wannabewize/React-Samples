function MailBox(props) {
    const unreadMessages = props.unreadMessages;
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            null,
            'Hello'
        ),
        unreadMessages.length > 0 && React.createElement(
            'h4',
            null,
            'You have ',
            unreadMessages.length,
            ' unread messages.'
        )
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

ReactDOM.render(React.createElement(MailBox, { unreadMessages: messages }), document.getElementById('operator'));