import type {
  AddTodolistActionType,
  RemoveTodolistActionType,
} from '../../../todolists/model/todolists-reducer/actions-todolists';
import { TaskStatusEnum, TaskType } from '@/shared';

export const setTasksAC = (payload: { todoListId: string; tasks: TaskType[] }) => {
  return { type: 'SET-TASKS', payload } as const;
};
export const removeTaskAC = (payload: { taskId: string; todoListId: string }) => {
  return { type: 'REMOVE-TASK', payload } as const;
};

export const addTaskAC = (payload: { task: TaskType }) => {
  return { type: 'ADD-TASK', payload } as const;
};

export const changeTaskStatusAC = (payload: { task: TaskType }) => {
  return {
    type: 'CHANGE-TASK-STATUS',
    payload,
  } as const;
};

export const changeTaskTitleAC = (payload: { taskId: string; title: string; todoListId: string }) => {
  return { type: 'CHANGE-TASK-TITLE', payload } as const;
};

type SetTasksType = ReturnType<typeof setTasksAC>;
type RemoveTaskActionType = ReturnType<typeof removeTaskAC>;

type AddTaskActionType = ReturnType<typeof addTaskAC>;

type ChangeTaskStatusActionType = ReturnType<typeof changeTaskStatusAC>;

type CardTaskTitleActionType = ReturnType<typeof changeTaskTitleAC>;

export type TasksActionsType =
  | SetTasksType
  | RemoveTaskActionType
  | AddTaskActionType
  | ChangeTaskStatusActionType
  | CardTaskTitleActionType
  | AddTodolistActionType
  | RemoveTodolistActionType;
