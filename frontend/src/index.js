import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as History from 'history';
import createStore from './reducks/store/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ConnectedRouter} from "connected-react-router";

const history = History.createBrowserHistory(); // connectedRouteの値が入る
export const store = createStore(history); // storeの情報を定数にいれる

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
