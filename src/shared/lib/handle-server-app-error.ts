import { setAppErrorAC, setAppStatusAC } from '../model';

import { Dispatch } from 'redux';
import { RequestStatus } from '../enums';

export function handleServerAppError(messages: string[], dispatch: Dispatch) {
  if (messages.length) {
    dispatch(setAppErrorAC(messages[0]));
  } else {
    dispatch(setAppErrorAC('Some error occurred'));
  }
  dispatch(setAppStatusAC(RequestStatus.Failed));
}
