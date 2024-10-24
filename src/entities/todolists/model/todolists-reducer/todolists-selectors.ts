import { RootState } from '../../../../app';
import { TodolistWithFilterType } from '../../types';

export const selectTodolists = (state: RootState) => state.todolists;
export const selectTodolistById = (todolistId: string) => (state: RootState) =>
  state.todolists.find((tl) => tl.id === todolistId) as TodolistWithFilterType;
export const selectFilterTodolistById = (todolistId: string) => (state: RootState) =>
  state.todolists.find((tl) => tl.id === todolistId) as TodolistWithFilterType;
