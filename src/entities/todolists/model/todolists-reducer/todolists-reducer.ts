import { TodolistWithFilterType } from '@/shared';
import { TodolistsActionsType } from './actions-todolists';

const initialState: TodolistWithFilterType[] = [];

export const todolistsReducer = (
  state: TodolistWithFilterType[] = initialState,
  action: TodolistsActionsType
): TodolistWithFilterType[] => {
  switch (action.type) {
    case 'SET-TODOLISTS': {
      return action.todolists.map((tl) => ({ ...tl, filter: 'all' }));
    }
    case 'REMOVE-TODOLIST': {
      return state.filter((tl) => tl.id !== action.payload.todolistId);
    }
    case 'ADD-TODOLIST': {
      const newTodolist: TodolistWithFilterType = {
        id: action.payload.todolistId,
        title: action.payload.title,
        filter: 'all',
        addedDate: '',
        order: 0,
      };
      return [...state, newTodolist];
    }
    case 'CHANGE-TODOLIST-TITLE': {
      const newTodolistTitle = state.map((tl) =>
        tl.id === action.payload.todolistId ? { ...tl, title: action.payload.title } : tl
      );
      return newTodolistTitle;
    }
    case 'CHANGE-TODOLIST-FILTER': {
      const newTodolists = state.map((tl) =>
        tl.id === action.payload.todolistId ? { ...tl, filter: action.payload.filter } : tl
      );
      return newTodolists;
    }

    default:
      return state;
  }
};
