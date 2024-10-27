import { CreateTaskResponseSchema, ResultCode, TaskType, setAppErrorAC, setAppStatusAC } from '@/shared';

import { Dispatch } from 'redux';
import { addTaskAC } from '../tasks-actions';
import { tasksApi } from '@/entities/task/api';

export const createTaskTC = (arg: { title: string; todoListId: string }) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'));
  tasksApi
    .createTask(arg)
    .then((res) => CreateTaskResponseSchema.parse(res.data))
    .then((res) => {
      if (res.resultCode === ResultCode.Success) {
        const task = res.data.item as TaskType;
        dispatch(addTaskAC({ task }));
        dispatch(setAppStatusAC('success'));
      } else {
        if (res.messages.length) {
          dispatch(setAppErrorAC(res.messages[0]));
        } else {
          dispatch(setAppErrorAC('Some error occurred'));
        }
        dispatch(setAppStatusAC('failed'));
      }
    });
};
