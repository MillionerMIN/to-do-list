import { TodolistWithFilterType } from '@/shared';
import { TodolistsActionsType } from './actions-todolists';

const initialState: TodolistWithFilterType[] = [];

export const todolistsReducer = (
  state: TodolistWithFilterType[] = initialState,
  action: TodolistsActionsType
): TodolistWithFilterType[] => {
  switch (action.type) {
    case 'SET-TODOLISTS': {
      return action.todolists.map((tl) => ({ ...tl, filter: 'all', entityStatus: 'idle' }));
    }
    case 'REMOVE-TODOLIST': {
      return state.filter((tl) => tl.id !== action.payload.todoListId);
    }
    case 'ADD-TODOLIST': {
      const { ...props } = action.payload.todolist;
      const newTodolist: TodolistWithFilterType = {
        ...props,
        filter: 'all',
        entityStatus: 'idle',
      };
      return [...state, newTodolist];
    }
    case 'CHANGE-TODOLIST-TITLE': {
      const { id, title } = action.payload;
      const newTodolistTitle = state.map((tl) => (tl.id === id ? { ...tl, title } : tl));
      return newTodolistTitle;
    }
    case 'CHANGE-TODOLIST-FILTER': {
      const newTodolists = state.map((tl) =>
        tl.id === action.payload.todoListId ? { ...tl, filter: action.payload.filter } : tl
      );
      return newTodolists;
    }
    case 'CHANGE-TODOLIST-ENTITY-STATUS': {
      const { todoListId, entityStatus } = action.payload;
      return state.map((tl) => (tl.id === todoListId ? { ...tl, entityStatus } : tl));
    }

    default:
      return state;
  }
};
