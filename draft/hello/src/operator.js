function MailBox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h3>Hello</h3>
            {
                unreadMessages.length > 0 &&
                <h4>You have {unreadMessages.length} unread messages.</h4>
            }
        </div>
    )
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

ReactDOM.render(<MailBox unreadMessages={messages}/>, document.getElementById('operator'));