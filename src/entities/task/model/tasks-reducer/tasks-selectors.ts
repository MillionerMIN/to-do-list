import { FilterValuesType, TaskType } from '../../../../shared';

import { RootState } from '../../../../app';

export const selectTaskByTaskId =
  (todolistId: string, taskId: string) => (state: RootState) =>
    state.tasks[todolistId].find((task) => task.id === taskId) as TaskType;

export const selectFilterTasksByTodolistId =
  (todolistId: string, filter: FilterValuesType) => (state: RootState) => {
    if (filter === 'active')
      return state.tasks[todolistId].filter((task) => !task.isDone);

    if (filter === 'completed')
      return state.tasks[todolistId].filter((task) => task.isDone);
    return state.tasks[todolistId];
  };
