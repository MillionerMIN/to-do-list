import { GetTasksResponseSchema, RequestStatus, TaskType, handleServerNetworkError, setAppStatusAC } from '@/shared';

import { Dispatch } from 'redux';
import { setTasksAC } from '../tasks-actions';
import { tasksApi } from '../../../api';

export const fetchTasksTC = (todoListId: string) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC(RequestStatus.Loading));
  tasksApi
    .getTasks(todoListId)
    .then((res) => GetTasksResponseSchema.parse(res.data))
    .then((res) => {
      const tasks = res.items as TaskType[];
      dispatch(setTasksAC({ todoListId, tasks }));
      dispatch(setAppStatusAC(RequestStatus.Success));
    })
    .catch((error) => {
      handleServerNetworkError(error, dispatch);
    });
};
