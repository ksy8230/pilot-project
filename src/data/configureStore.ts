import { applyMiddleware, compose, createStore, MiddlewareAPI, Dispatch, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createRootReducer, AppState } from './rootReducer';
import { AppActions } from '../types/actions';

const history = createBrowserHistory();
const rootReducer = createRootReducer(history);

const firstMiddleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: any) => {
  console.log('로깅', action);
  next(action);
};

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(
        applyMiddleware(
          firstMiddleware,
          thunk as ThunkMiddleware<AppState, AppActions>,
          routerMiddleware(history),
        ),
      )
    : composeWithDevTools(
        applyMiddleware(
          firstMiddleware,
          thunk as ThunkMiddleware<AppState, AppActions>,
          routerMiddleware(history),
        ),
      );

const store = createStore(rootReducer, enhancer);

export { store, history };
