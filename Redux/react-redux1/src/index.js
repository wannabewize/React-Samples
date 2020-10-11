import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./Reducer";
import { increaseValue, decreaseValue } from "./Actions";

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

setTimeout(() => {
     store.dispatch(increaseValue(10));
     console.log('timer works', store.getState());
}, 2000);

setTimeout(() => {
     store.dispatch(increaseValue(20));
     console.log('timer works', store.getState());
}, 4000);

setTimeout(() => {
     store.dispatch(decreaseValue(30));
     console.log('timer works', store.getState());
}, 6000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
