import * as ActionTypes from '../rootActionTypes';
import * as actions from '../rootActions';

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

type UserReducerActions =
  | actions.user.LogInRequestAction
  | actions.user.LogInSuccessAction
  | actions.user.LogOutRequestAction
  | actions.user.LogOutSuccessAction;

export default function user(state = initialState, action: UserReducerActions) {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST: {
      return { ...state, user: null, isLoading: true };
    }
    case ActionTypes.LOGIN_SUCCESS: {
      return { ...state, user: action.data, isLoading: true };
    }
    case ActionTypes.LOGOUT_REQUEST: {
      return { ...state };
    }
    case ActionTypes.LOGOUT_SUCCESS: {
      return { ...state, user: null };
    }
    default:
      return state;
  }
}
