import {
  LogInResponseSchema,
  RequestStatus,
  ResultCode,
  handleServerAppError,
  handleServerNetworkError,
  setAppStatusAC,
} from '@/shared';

import { Dispatch } from 'redux';
import { LoginArgs } from '../../types';
import { authApi } from '../../api';
import { setIsLoggedInAC } from '../actions';

export const loginTC = (data: LoginArgs) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC(RequestStatus.Loading));
  authApi
    .logIn(data)
    .then((res) => LogInResponseSchema.parse(res.data))
    .then((res) => {
      if (res.resultCode === ResultCode.Success) {
        dispatch(setAppStatusAC(RequestStatus.Success));
        dispatch(setIsLoggedInAC(true));
        localStorage.setItem('sn-token', res.data.token as string);
      } else {
        handleServerAppError(res.messages, dispatch);
      }
    })
    .catch((error) => {
      handleServerNetworkError(error, dispatch);
    });
};
