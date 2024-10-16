import type { FilterValuesType } from '../../../../shared';
import { v1 } from 'uuid';

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

export type ChangeTodolistFilterActionType = ReturnType<
  typeof changedTodolistFilterAC
>;

export type TodolistsActionsType =
  | RemoveTodolistActionType
  | AddTodolistActionType
  | ChangeTodolistTitleActionType
  | ChangeTodolistFilterActionType;
