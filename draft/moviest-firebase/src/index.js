import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import { firebaseConfig } from "./firebaseConfig";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./Reducer";

import { requestMovies } from "./Actions";


// 파이어베이스 초기화
firebase.initializeApp(firebaseConfig);

// 스토어 생성
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

// 초기 영화 목록 얻기
requestMovies(store.dispatch);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
