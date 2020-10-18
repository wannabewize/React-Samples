import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./Reducer";
import {addTodo} from "./Actions";
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />

        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

store.dispatch( addTodo('study node.js'));
store.dispatch( addTodo('study react.js'));
store.dispatch( addTodo('study react native'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
