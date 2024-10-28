import { RootState } from '@/app';
import { TodolistWithFilterType } from '@/shared';

export const selectTodolists = (state: RootState) => state.todolists;
export const selectTodolistById = (todoListId: string) => (state: RootState) =>
  state.todolists.find((tl) => tl.id === todoListId) as TodolistWithFilterType;
export const selectFilterTodolistById = (todoListId: string) => (state: RootState) =>
  state.todolists.find((tl) => tl.id === todoListId) as TodolistWithFilterType;
