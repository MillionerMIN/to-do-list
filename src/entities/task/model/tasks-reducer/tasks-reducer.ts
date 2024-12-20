import { TasksActionsType } from './tasks-actions';
import { TasksType } from '@/shared';

const initialState: TasksType = {};

export const tasksReducer = (state: TasksType = initialState, action: TasksActionsType): TasksType => {
  switch (action.type) {
    case 'SET-TASKS': {
      const stateCopy = { ...state };
      stateCopy[action.payload.todoListId] = action.payload.tasks;
      return stateCopy;
    }
    case 'REMOVE-TASK': {
      return {
        ...state,
        [action.payload.todoListId]: state[action.payload.todoListId].filter(
          (task) => task.id !== action.payload.taskId
        ),
      };
    }
    case 'REMOVE-TODOLIST': {
      delete state[action.payload.todoListId];
      return state;
    }
    case 'ADD-TODOLIST': {
      return { ...state, [action.payload.todolist.id]: [] };
    }
    case 'ADD-TASK': {
      const newTask = action.payload.task;
      return {
        ...state,
        [newTask.todoListId]: [newTask, ...state[newTask.todoListId]],
      };
    }
    case 'CHANGE-TASK-STATUS': {
      const { todoListId, id, status } = action.payload.task;
      return {
        ...state,
        [todoListId]: [...state[todoListId].map((task) => (task.id === id ? { ...task, status } : task))],
      };
    }
    case 'CHANGE-TASK-TITLE': {
      const { todoListId, id, title } = action.payload.task;
      return {
        ...state,
        [todoListId]: [...state[todoListId].map((task) => (task.id === id ? { ...task, title } : task))],
      };
    }
    default:
      return state;
  }
};
