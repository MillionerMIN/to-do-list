import type {
  AddTodolistActionType,
  RemoveTodolistActionType,
} from '../../../todolists/model/todolists-reducer/actions';

export const removeTaskAC = (payload: {
  taskId: string;
  todolistId: string;
}) => {
  return { type: 'REMOVE-TASK', payload } as const;
};

export const addTaskAC = (payload: { title: string; todolistId: string }) => {
  return { type: 'ADD-TASK', payload } as const;
};

export const changeTaskStatusAC = (payload: {
  taskId: string;
  isDone: boolean;
  todolistId: string;
}) => {
  return {
    type: 'CHANGE-TASK-STATUS',
    payload,
  } as const;
};

export const changeTaskTitleAC = (payload: {
  taskId: string;
  title: string;
  todolistId: string;
}) => {
  return { type: 'CHANGE-TASK-TITLE', payload } as const;
};

type RemoveTaskActionType = ReturnType<typeof removeTaskAC>;

type AddTaskActionType = ReturnType<typeof addTaskAC>;

type ChangeTaskStatusActionType = ReturnType<typeof changeTaskStatusAC>;

type CardTaskTitleActionType = ReturnType<typeof changeTaskTitleAC>;

export type TasksActionsType =
  | RemoveTaskActionType
  | AddTaskActionType
  | ChangeTaskStatusActionType
  | CardTaskTitleActionType
  | AddTodolistActionType
  | RemoveTodolistActionType;
