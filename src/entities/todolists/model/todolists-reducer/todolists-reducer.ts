import { TodolistType } from '../../types';
import { TodolistsActionsType } from './actions';

const initialState: TodolistType[] = [];

export const todolistsReducer = (
  state: TodolistType[] = initialState,
  action: TodolistsActionsType
): TodolistType[] => {
  switch (action.type) {
    case 'REMOVE-TODOLIST': {
      return state.filter((tl) => tl.id !== action.payload.todolistId);
    }
    case 'ADD-TODOLIST': {
      const newTodolist: TodolistType = {
        id: action.payload.todolistId,
        title: action.payload.title,
        filter: 'all',
      };
      return [...state, newTodolist];
    }
    case 'CHANGE-TODOLIST-TITLE': {
      const newTodolistTitle = state.map((tl) =>
        tl.id === action.payload.todolistId
          ? { ...tl, title: action.payload.title }
          : tl
      );
      return newTodolistTitle;
    }
    case 'CHANGE-TODOLIST-FILTER': {
      const newTodolists = state.map((tl) =>
        tl.id === action.payload.todolistId
          ? { ...tl, filter: action.payload.filter }
          : tl
      );
      return newTodolists;
    }

    default:
      return state;
  }
};
