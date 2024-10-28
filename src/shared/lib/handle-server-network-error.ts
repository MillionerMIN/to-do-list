import { setAppErrorAC, setAppStatusAC } from '../model';

import { Dispatch } from 'redux';
import { RequestStatus } from '../enums';

export function handleServerNetworkError(error: { message: string }, dispatch: Dispatch) {
  dispatch(setAppErrorAC(error.message));
  dispatch(setAppStatusAC(RequestStatus.Error));
}
