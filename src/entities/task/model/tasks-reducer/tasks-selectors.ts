import { FilterTodolistType, TaskStatus, TaskType } from '@/shared';

import { RootState } from '@/app';

export const selectTaskByTaskId = (todoListId: string, taskId: string) => (state: RootState) =>
  state.tasks[todoListId].find((task) => task.id === taskId) as TaskType;

export const selectFilterTasksByTodoListId = (todoListId: string, filter: FilterTodolistType) => (state: RootState) => {
  if (filter === 'active') return state.tasks[todoListId].filter((task) => task.status === TaskStatus.New);

  if (filter === 'completed') return state.tasks[todoListId].filter((task) => task.status === TaskStatus.Completed);
  return state.tasks[todoListId];
};
