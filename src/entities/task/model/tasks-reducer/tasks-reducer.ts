import { TasksActionsType } from './actions';
import { TasksStateType } from '../../../../shared';
import { v1 } from 'uuid';

const initialState: TasksStateType = {};

export const tasksReducer = (
  state: TasksStateType = initialState,
  action: TasksActionsType
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
