function HelloMessage(props) {
    return (
        <div>Hello <x-search>{props.name}</x-search>!</div>
    )
}

class XSearch extends HTMLElement {
    connectedCallback() {
      const mountPoint = document.createElement('span');
      this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
  
      const name = this.getAttribute('name');
      const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
      ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
    }
  }
  customElements.define('x-search', XSearch);

ReactDOM.render(
    <div>
        <HelloMessage name={'iu'} />
    </div>,
    document.getElementById('component'));