import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { configureStore, createReducer } from '@reduxjs/toolkit';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const rootReducer = createReducer({ user: null }, builder => {
  builder.addCase('LOG-IN', (state, action) => {
    state.user = action.user;
  });

  builder.addCase('LOG-OUT', (state, action) => {
    state.user = null;
  });
})

const store = configureStore({ reducer: rootReducer })

// 인증 상태 변경 옵저버
onAuthStateChanged(getAuth(), (user) => {
  console.log('user auth state changed');
  if (user) {
    store.dispatch({ type: 'LOG-IN', user });
  } else {
    store.dispatch({ type: 'LOG-OUT' });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
