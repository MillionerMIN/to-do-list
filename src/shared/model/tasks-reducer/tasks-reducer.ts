import type {
  AddTodolistActionType,
  RemoveTodolistActionType,
} from '../todolists-reducer/todolists-reducer';

import type { TasksStateType } from '../../types';
import { v1 } from 'uuid';

const initialState: TasksStateType = {};

export const tasksReducer = (
  state: TasksStateType = initialState,
  action: ActionsType
): TasksStateType => {
  switch (action.type) {
    case 'REMOVE-TASK': {
      return {
        ...state,
        [action.payload.todolistId]: state[action.payload.todolistId].filter(
          (task) => task.id !== action.payload.taskId
        ),
      };
    }
    case 'REMOVE-TODOLIST': {
      delete state[action.payload.todolistId];
      return state;
    }
    case 'ADD-TODOLIST': {
      return { ...state, [action.payload.todolistId]: [] };
    }
    case 'ADD-TASK': {
      const newTask = {
        id: v1(),
        title: action.payload.title,
        isDone: false,
      };
      return {
        ...state,
        [action.payload.todolistId]: [
          ...state[action.payload.todolistId],
          newTask,
        ],
      };
    }
    case 'CHANGE-TASK-STATUS': {
      return {
        ...state,
        [action.payload.todolistId]: [
          ...state[action.payload.todolistId].map((task) =>
            task.id === action.payload.taskId
              ? { ...task, isDone: action.payload.isDone }
              : task
          ),
        ],
      };
    }
    case 'CHANGE-TASK-TITLE': {
      return {
        ...state,
        [action.payload.todolistId]: [
          ...state[action.payload.todolistId].map((task) =>
            task.id === action.payload.taskId
              ? { ...task, title: action.payload.title }
              : task
          ),
        ],
      };
    }
    default:
      return state;
  }
};

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

type ActionsType =
  | RemoveTaskActionType
  | AddTaskActionType
  | ChangeTaskStatusActionType
  | CardTaskTitleActionType
  | AddTodolistActionType
  | RemoveTodolistActionType;
