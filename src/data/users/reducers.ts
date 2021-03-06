import * as ActionTypes from '../rootActionTypes';
import { UserActionsTypes } from '../../types/actions';

export interface UserState {
  user: {
    nickname: string;
  } | null;
  isLoading: boolean;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
};

export default function user(state = initialState, action: UserActionsTypes) {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST: {
      return { ...state, user: null, isLoading: true };
    }
    case ActionTypes.LOGIN_SUCCESS: {
      return { ...state, user: action.data, isLoading: false };
    }
    case ActionTypes.LOGOUT_REQUEST: {
      return { ...state };
    }
    case ActionTypes.LOGOUT_SUCCESS: {
      return { ...state, user: null };
    }
    case ActionTypes.LOAD_ME_REQUEST: {
      return { ...state };
    }
    case ActionTypes.LOAD_ME_SUCCESS: {
      return { ...state, user: action.data };
    }
    default:
      return state;
  }
}
