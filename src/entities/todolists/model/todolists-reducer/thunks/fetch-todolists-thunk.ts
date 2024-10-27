import { TodolistsDtoSchema, setAppStatusAC } from '@/shared';

import { Dispatch } from 'redux';
import { setTodolistsAC } from '../actions-todolists';
import { todolistsApi } from '@/entities/todolists/api';

export const fetchTodolistsThunk = (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'));
  todolistsApi
    .getTodolists()
    .then((res) => TodolistsDtoSchema.parse(res.data))
    .then((res) => {
      dispatch(setAppStatusAC('success'));
      dispatch(setTodolistsAC(res));
    });
};
