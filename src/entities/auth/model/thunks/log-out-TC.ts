import {
  LogOutResponseSchema,
  RequestStatus,
  ResultCode,
  handleServerAppError,
  handleServerNetworkError,
  setAppStatusAC,
} from '@/shared';

import { Dispatch } from 'redux';
import { authApi } from '../../api';
import { setIsLoggedInAC } from '../actions';

export const logOutTC = () => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC(RequestStatus.Loading));
  authApi
    .logOut()
    .then((res) => LogOutResponseSchema.parse(res.data))
    .then((res) => {
      if (res.resultCode === ResultCode.Success) {
        dispatch(setAppStatusAC(RequestStatus.Success));
        dispatch(setIsLoggedInAC(false));
        localStorage.removeItem('sn-token');
      } else {
        handleServerAppError(res.messages, dispatch);
      }
    })
    .catch((error) => {
      handleServerNetworkError(error, dispatch);
    });
};
