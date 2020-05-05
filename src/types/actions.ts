import * as ActionTypes from '../data/rootActionTypes';
import { UserProps, LoginProps } from '../types/props';

export interface LogInRequestAction {
  type: typeof ActionTypes.LOGIN_REQUEST;
  data: LoginProps;
}
export interface LogInSuccessAction {
  type: typeof ActionTypes.LOGIN_SUCCESS;
  data: UserProps;
}

export interface LogOutRequestAction {
  type: typeof ActionTypes.LOGOUT_REQUEST;
}

export interface LogOutSuccessAction {
  type: typeof ActionTypes.LOGOUT_SUCCESS;
}

export type UserActionsTypes =
  | LogInRequestAction
  | LogInSuccessAction
  | LogOutRequestAction
  | LogOutSuccessAction;

export type UserActions = UserActionsTypes;

export type AppActions = UserActionsTypes;
