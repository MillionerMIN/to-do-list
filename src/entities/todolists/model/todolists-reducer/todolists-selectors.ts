import { RootState } from '../../../../app';
import { TodolistType } from '../../../../shared';

export const selectTodolists = (state: RootState) => state.todolists;
export const selectTodolistById = (todolistId: string) => (state: RootState) =>
  state.todolists.find((tl) => tl.id === todolistId) as TodolistType;
export const selectFilterTodolistById =
  (todolistId: string) => (state: RootState) =>
    state.todolists.find((tl) => tl.id === todolistId) as TodolistType;
