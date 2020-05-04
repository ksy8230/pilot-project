import { applyMiddleware, compose, createStore, MiddlewareAPI, Dispatch, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createRootReducer } from './rootReducer';

const history = createBrowserHistory();
const rootReducer = createRootReducer(history);

const firstMiddleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: any) => {
  console.log('로깅', action);
  next(action);
};

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(firstMiddleware, thunk, routerMiddleware(history)))
    : composeWithDevTools(applyMiddleware(firstMiddleware, thunk, routerMiddleware(history)));

const store = createStore(rootReducer, enhancer);

export { store, history };
