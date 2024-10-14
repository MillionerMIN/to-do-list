import { FilterValuesType, TodolistType } from '../../types';

import { v1 } from 'uuid';

const initialState: TodolistType[] = [];

export const todolistsReducer = (
  state: TodolistType[] = initialState,
  action: ActionsType
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

export const removeTodolistAC = (todolistId: string) => {
  return { type: 'REMOVE-TODOLIST', payload: { todolistId } } as const;
};

export const addTodolistAC = (title: string) => {
  return {
    type: 'ADD-TODOLIST',
    payload: { title, todolistId: v1() },
  } as const;
};

export const changedTodolistTitleAC = (payload: {
  todolistId: string;
  title: string;
}) => {
  return {
    type: 'CHANGE-TODOLIST-TITLE',
    payload,
  } as const;
};

export const changedTodolistFilterAC = (payload: {
  todolistId: string;
  filter: FilterValuesType;
}) => {
  return {
    type: 'CHANGE-TODOLIST-FILTER',
    payload,
  } as const;
};

export type RemoveTodolistActionType = ReturnType<typeof removeTodolistAC>;
export type AddTodolistActionType = ReturnType<typeof addTodolistAC>;

type ChangeTodolistTitleActionType = ReturnType<typeof changedTodolistTitleAC>;

type ChangeTodolistFilterActionType = ReturnType<
  typeof changedTodolistFilterAC
>;

type ActionsType =
  | RemoveTodolistActionType
  | AddTodolistActionType
  | ChangeTodolistTitleActionType
  | ChangeTodolistFilterActionType;
