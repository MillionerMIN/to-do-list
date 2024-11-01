import {
  MeResponseSchema,
  RequestStatus,
  ResultCode,
  handleServerAppError,
  handleServerNetworkError,
  setAppStatusAC,
} from '@/shared';
import { setIsInitializedAC, setIsLoggedInAC } from '../actions';

import { Dispatch } from 'redux';
import { authApi } from '../../api';

export const initializeAppTC = () => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC(RequestStatus.Loading));
  authApi
    .me()
    .then((res) => MeResponseSchema.parse(res.data))
    .then((res) => {
      if (res.resultCode === ResultCode.Success) {
        dispatch(setAppStatusAC(RequestStatus.Success));
        dispatch(setIsLoggedInAC(true));
      } else {
        handleServerAppError(res.messages, dispatch);
      }
    })
    .catch((error) => handleServerNetworkError(error, dispatch))
    .finally(() => dispatch(setIsInitializedAC(true)));
};
