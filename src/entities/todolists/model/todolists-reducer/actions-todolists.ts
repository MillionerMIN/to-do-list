import { FilterTodolistType, TodolistType } from '@/shared';

export const setTodolistsAC = (todolists: TodolistType[]) => {
  return { type: 'SET-TODOLISTS', todolists } as const;
};
export const removeTodolistAC = (todoListId: string) => {
  return { type: 'REMOVE-TODOLIST', payload: { todoListId } } as const;
};

export const addTodolistAC = (todolist: TodolistType) => {
  return {
    type: 'ADD-TODOLIST',
    payload: { todolist },
  } as const;
};

export const changedTodolistTitleAC = (payload: { id: string; title: string }) => {
  return {
    type: 'CHANGE-TODOLIST-TITLE',
    payload,
  } as const;
};

export const changedTodolistFilterAC = (payload: { todoListId: string; filter: FilterTodolistType }) => {
  return {
    type: 'CHANGE-TODOLIST-FILTER',
    payload,
  } as const;
};

export type SetTodolistsActionType = ReturnType<typeof setTodolistsAC>;
export type RemoveTodolistActionType = ReturnType<typeof removeTodolistAC>;
export type AddTodolistActionType = ReturnType<typeof addTodolistAC>;

type ChangeTodolistTitleActionType = ReturnType<typeof changedTodolistTitleAC>;

export type ChangeTodolistFilterActionType = ReturnType<typeof changedTodolistFilterAC>;

export type TodolistsActionsType =
  | SetTodolistsActionType
  | RemoveTodolistActionType
  | AddTodolistActionType
  | ChangeTodolistTitleActionType
  | ChangeTodolistFilterActionType;
