function HelloMessage(props) {
    return React.createElement(
        'div',
        null,
        'Hello ',
        React.createElement(
            'x-search',
            null,
            props.name
        ),
        '!'
    );
}

class XSearch extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement('span');
        this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

        const name = this.getAttribute('name');
        const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
        ReactDOM.render(React.createElement(
            'a',
            { href: url },
            name
        ), mountPoint);
    }
}
customElements.define('x-search', XSearch);

ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(HelloMessage, { name: 'iu' })
), document.getElementById('component'));