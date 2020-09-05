const react = require('react');
const renderToString = require('react-dom/server').renderToString;

const Hello = (<h1>Hello</h1>);
const jsx = (<div><Hello /></div>);

const result = renderToString(jsx);