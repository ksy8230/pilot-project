import * as ActionTypes from '../rootActionTypes';
import * as actions from '../rootActions';
import { Dispatch } from 'react';
//import apis from '@/services/apis';

export interface LogInRequestAction {
  type: typeof ActionTypes.LOGIN_REQUEST;
  data: {
    id: string;
    password: string;
  };
}
export interface LogInSuccessAction {
  type: typeof ActionTypes.LOGIN_SUCCESS;
  data: {
    userId: number;
    nickname: string;
  };
}

export const loginRequest = (data: { id: string; password: string }): LogInRequestAction => ({
  type: ActionTypes.LOGIN_REQUEST,
  data,
});

export const loginSuccess = (data: { userId: number; nickname: string }): LogInSuccessAction => ({
  type: ActionTypes.LOGIN_SUCCESS,
  data,
});

export const login = (data: { id: string; password: string }) => async (
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
