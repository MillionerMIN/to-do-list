import { setAppErrorAC, setAppStatusAC } from '../model';

import { CreateTaskType } from '../types';
import { Dispatch } from 'redux';
import { RequestStatus } from '../enums';

export function handleServerAppError(data: CreateTaskType, dispatch: Dispatch) {
  if (data.messages.length) {
    dispatch(setAppErrorAC(data.messages[0]));
  } else {
    dispatch(setAppErrorAC('Some error occurred'));
  }
  dispatch(setAppStatusAC(RequestStatus.Failed));
}
