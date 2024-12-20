import { RequestStatus, UpdateTaskResponseSchema, handleServerNetworkError, setAppStatusAC } from '@/shared';

import { Dispatch } from 'redux';
import { RootState } from '@/app';
import { UpdateTaskTitleType } from '@/entities/task/types';
import { changeTaskTitleAC } from '../tasks-actions';
import { tasksApi } from '@/entities/task/api';

export const changeTaskTitleTC =
  (arg: { title: string; taskId: string; todoListId: string }) => (dispatch: Dispatch, getState: () => RootState) => {
    const { taskId, todoListId, title } = arg;

    const allTasksFromState = getState().tasks;
    const tasksForCurrentTodolist = allTasksFromState[todoListId];
    const task = tasksForCurrentTodolist.find((t) => t.id === taskId);

    if (task) {
      const model: UpdateTaskTitleType = {
        title,
      };
      dispatch(setAppStatusAC(RequestStatus.Loading));
      tasksApi
        .changeTitleTask({ taskId, todoListId, model })
        .then((res) => UpdateTaskResponseSchema.parse(res.data))
        .then((res) => {
          dispatch(changeTaskTitleAC({ task: res.data.item }));
          dispatch(setAppStatusAC(RequestStatus.Success));
        })
        .catch((error) => {
          handleServerNetworkError(error, dispatch);
        });
    }
  };
