import { GetTasksResponseSchema, TaskType } from '@/shared';

import { Dispatch } from 'redux';
import { setTasksAC } from '../tasks-actions';
import { tasksApi } from '../../../api';

export const fetchTasksTC = (todoListId: string) => (dispatch: Dispatch) => {
  tasksApi
    .getTasks(todoListId)
    .then((res) => GetTasksResponseSchema.parse(res.data))
    .then((res) => {
      const tasks = res.items as TaskType[];
      dispatch(setTasksAC({ todoListId, tasks }));
    });
};