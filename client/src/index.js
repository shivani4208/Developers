import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import { StateProvider } from './global-state/state';
import thunk from "redux-thunk";
import { reducers } from './reducers';
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);