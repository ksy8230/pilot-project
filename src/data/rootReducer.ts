import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import user from './users/reducers';

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    user,
  });

export type AppState = ReturnType<typeof createRootReducer>; // 리덕스에 존재하는 모든 state들의 type

export { createRootReducer };
