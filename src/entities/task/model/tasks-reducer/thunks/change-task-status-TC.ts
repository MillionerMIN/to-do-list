import { TaskStatusEnum, UpdateTaskResponseSchema } from '@/shared';

import { Dispatch } from 'redux';
import { RootState } from '@/app';
import { UpdateTaskParamsType } from '@/entities/task/types';
import { changeTaskStatusAC } from '../tasks-actions';
import { tasksApi } from '@/entities/task/api';

export const changeTaskStatusTC =
  (arg: { status: TaskStatusEnum; taskId: string; todoListId: string }) =>
  (dispatch: Dispatch, getState: () => RootState) => {
    const { taskId, todoListId, status } = arg;

    const allTasksFromState = getState().tasks;
    const tasksForCurrentTodolist = allTasksFromState[todoListId];
    const task = tasksForCurrentTodolist.find((t) => t.id === taskId);

    if (task) {
      const model: UpdateTaskParamsType = {
        status,
        title: task.title,
        description: task.description,
        priority: task.priority,
        startDate: task.startDate,
        deadline: task.deadline,
      };
      tasksApi
        .updateStatusTask({ taskId, todoListId, model })
        .then((res) => UpdateTaskResponseSchema.parse(res.data))
        .then((res) => dispatch(changeTaskStatusAC({ task: res.data.item })));
    }
  };
