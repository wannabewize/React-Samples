import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./Reducer";
import { authReducers } from "./AuthReducer";
import { requestMovies } from './Actions';

const rootReducers = combineReducers({ movie: reducer, auth: authReducers });

// 스토어 생성
const store = createStore(
    rootReducers,
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

// 초기 영화 목록 얻기
requestMovies(store.dispatch);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
