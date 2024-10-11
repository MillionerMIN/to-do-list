import { TaskType } from './task-type';

export type TasksStateType = {
  [key: string]: TaskType[];
};
