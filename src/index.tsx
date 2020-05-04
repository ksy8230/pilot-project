import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { store, history } from './data/configureStore';
import App from './App';

const Hot = hot(App);

ReactDOM.render(
  <Provider store={store}>
    <Hot history={history} />
  </Provider>,
  document.querySelector('#root'),
);
