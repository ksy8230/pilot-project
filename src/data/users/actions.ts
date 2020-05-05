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
    setTimeout(() => {
      const fakeUser = { userId: 1, nickname: 'sy' };
      // api 요청 자리
      dispatch(loginSuccess(fakeUser));
      localStorage.setItem(
        'login',
        JSON.stringify({
          login: true,
          user: fakeUser,
        }),
      );
      dispatch(actions.router.push('/') as any);
    }, 3000);
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
    localStorage.removeItem('login');
    dispatch(actions.router.push('/login') as any);
  } catch (error) {
    console.error(error);
  }
};

export const loadMeRequest = (): UserActions => ({
  type: ActionTypes.LOAD_ME_REQUEST,
});

export const loadMeSuccess = (data: UserProps): UserActions => ({
  type: ActionTypes.LOAD_ME_SUCCESS,
  data,
});

export const loadMe = () => async (dispatch: Dispatch<UserActions>) => {
  dispatch(loadMeRequest());
  try {
    const userStatus = JSON.parse(localStorage.getItem('login') || '{}');
    if (Object.keys(userStatus).length === 0) return dispatch(actions.router.push('/login') as any);
    const user = userStatus.user;
    dispatch(loadMeSuccess(user));
  } catch (error) {
    console.error(error);
  }
};
