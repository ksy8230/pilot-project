import * as ActionTypes from '../rootActionTypes';
import * as actions from '../rootActions';
import { Dispatch } from 'react';
import { UserProps, LoginProps } from '../../types';
//import apis from '@/services/apis';

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

export const loginRequest = (data: LoginProps): LogInRequestAction => ({
  type: ActionTypes.LOGIN_REQUEST,
  data,
});

export const loginSuccess = (data: UserProps): LogInSuccessAction => ({
  type: ActionTypes.LOGIN_SUCCESS,
  data,
});

export const login = (data: LoginProps) => async (
  dispatch: Dispatch<LogInRequestAction | LogInSuccessAction>,
) => {
  dispatch(loginRequest(data));
  try {
    dispatch(
      loginSuccess({
        userId: 1,
        nickname: 'sy',
      }),
    );
    dispatch(actions.router.push('/') as any);
  } catch (error) {
    console.error(error);
  }
};

export const logoutRequest = (): LogOutRequestAction => ({
  type: ActionTypes.LOGOUT_REQUEST,
});

export const logoutSuccess = (): LogOutSuccessAction => ({
  type: ActionTypes.LOGOUT_SUCCESS,
});

export const logout = () => async (
  dispatch: Dispatch<LogOutRequestAction | LogOutSuccessAction>,
) => {
  dispatch(logoutRequest());
  try {
    dispatch(logoutSuccess());
    dispatch(actions.router.push('/login') as any);
  } catch (error) {
    console.error(error);
  }
};
