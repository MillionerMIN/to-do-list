import { DeleteTaskResponseSchema, RequestStatus, handleServerNetworkError, setAppStatusAC } from '@/shared';

import { Dispatch } from 'redux';
import { removeTaskAC } from '../tasks-actions';
import { tasksApi } from '@/entities/task/api';

export const removeTaskTC = (arg: { taskId: string; todoListId: string }) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC(RequestStatus.Loading));
  tasksApi
    .deleteTask(arg)
    .then((res) => DeleteTaskResponseSchema.parse(res.data))
    .then(() => {
      dispatch(removeTaskAC(arg));
      dispatch(setAppStatusAC(RequestStatus.Success));
    })
    .catch((error) => {
      handleServerNetworkError(error, dispatch);
    });
};
