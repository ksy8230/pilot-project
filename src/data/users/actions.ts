import * as ActionTypes from '../rootActionTypes';
import * as actions from '../rootActions';
import { Dispatch } from 'react';
import { UserProps, LoginProps } from '../../types/props';
import { UserActions } from '../../types/actions';
import { AppState } from '../rootReducer';
//import apis from '@/services/apis';

export const loginRequest = (data: LoginProps): UserActions => ({
  type: ActionTypes.LOGIN_REQUEST,
  data,
});

export const loginSuccess = (data: UserProps): UserActions => ({
  type: ActionTypes.LOGIN_SUCCESS,
  data,
});

export const login = (data: LoginProps) => async (
  dispatch: Dispatch<UserActions>,
  getState: () => AppState,
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

export const logoutRequest = (): UserActions => ({
  type: ActionTypes.LOGOUT_REQUEST,
});

export const logoutSuccess = (): UserActions => ({
  type: ActionTypes.LOGOUT_SUCCESS,
});

export const logout = () => async (dispatch: Dispatch<UserActions>) => {
  dispatch(logoutRequest());
  try {
    dispatch(logoutSuccess());
    dispatch(actions.router.push('/login') as any);
  } catch (error) {
    console.error(error);
  }
};
