import { CreateTaskResponseSchema, TaskType, setAppStatusAC } from '@/shared';

import { Dispatch } from 'redux';
import { addTaskAC } from '../tasks-actions';
import { tasksApi } from '@/entities/task/api';

export const createTaskTC = (arg: { title: string; todoListId: string }) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'));
  tasksApi
    .createTask(arg)
    .then((res) => CreateTaskResponseSchema.parse(res.data))
    .then((res) => {
      const task = res.data.item as TaskType;
      dispatch(addTaskAC({ task }));
      dispatch(setAppStatusAC('success'));
    });
};
