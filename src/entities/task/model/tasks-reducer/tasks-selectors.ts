import { FilterTodolistType, TaskType } from '@/shared';

import { RootState } from '@/app';

export const selectTaskByTaskId = (todolistId: string, taskId: string) => (state: RootState) =>
  state.tasks[todolistId].find((task) => task.id === taskId) as TaskType;

export const selectFilterTasksByTodolistId = (todolistId: string, filter: FilterTodolistType) => (state: RootState) => {
  if (filter === 'active') return state.tasks[todolistId].filter((task) => !task.status);

  if (filter === 'completed') return state.tasks[todolistId].filter((task) => task.status);
  return state.tasks[todolistId];
};
