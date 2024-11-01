import { FilterTodolistType, RequestStatusType, TodolistType } from '@/shared';

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

export const changeTodolistTitleAC = (payload: { id: string; title: string }) => {
  return {
    type: 'CHANGE-TODOLIST-TITLE',
    payload,
  } as const;
};

export const changeTodolistFilterAC = (payload: { todoListId: string; filter: FilterTodolistType }) => {
  return {
    type: 'CHANGE-TODOLIST-FILTER',
    payload,
  } as const;
};

export const changeTodolistEntityStatusAC = (payload: { todoListId: string; entityStatus: RequestStatusType }) => {
  return {
    type: 'CHANGE-TODOLIST-ENTITY-STATUS',
    payload,
  } as const;
};

type SetTodolistsActionType = ReturnType<typeof setTodolistsAC>;
export type RemoveTodolistActionType = ReturnType<typeof removeTodolistAC>;
export type AddTodolistActionType = ReturnType<typeof addTodolistAC>;
type ChangeTodolistTitleActionType = ReturnType<typeof changeTodolistTitleAC>;
type ChangeTodolistFilterActionType = ReturnType<typeof changeTodolistFilterAC>;
type ChangeTodolistEntityStatusType = ReturnType<typeof changeTodolistEntityStatusAC>;

export type TodolistsActionsType =
  | ChangeTodolistEntityStatusType
  | SetTodolistsActionType
  | RemoveTodolistActionType
  | AddTodolistActionType
  | ChangeTodolistTitleActionType
  | ChangeTodolistFilterActionType;
