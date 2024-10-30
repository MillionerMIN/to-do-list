import {
  CreateTaskResponseSchema,
  RequestStatus,
  ResultCode,
  TaskType,
  handleServerAppError,
  setAppStatusAC,
} from '@/shared';

import { Dispatch } from 'redux';
import { addTaskAC } from '../tasks-actions';
import { handleServerNetworkError } from '../../../../../shared/lib/handle-server-network-error';
import { tasksApi } from '@/entities/task/api';

export const createTaskTC = (arg: { title: string; todoListId: string }) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC(RequestStatus.Loading));
  tasksApi
    .createTask(arg)
    .then((res) => CreateTaskResponseSchema.parse(res.data))
    .then((res) => {
      if (res.resultCode === ResultCode.Success) {
        const task = res.data.item as TaskType;
        dispatch(addTaskAC({ task }));
        dispatch(setAppStatusAC(RequestStatus.Success));
      } else {
        console.log(res);
        handleServerAppError(res.messages, dispatch);
      }
    })
    .catch((error) => {
      handleServerNetworkError(error, dispatch);
    });
};
