import { RequestStatus, TodolistsDtoSchema, handleServerNetworkError, setAppStatusAC } from '@/shared';

import { Dispatch } from 'redux';
import { setTodolistsAC } from '../actions-todolists';
import { todolistsApi } from '@/entities/todolists/api';

export const fetchTodolistsThunk = (dispatch: Dispatch) => {
  dispatch(setAppStatusAC(RequestStatus.Loading));
  todolistsApi
    .getTodolists()
    .then((res) => TodolistsDtoSchema.parse(res.data))
    .then((res) => {
      dispatch(setTodolistsAC(res));
      dispatch(setAppStatusAC(RequestStatus.Success));
    })
    .catch((error) => {
      handleServerNetworkError(error, dispatch);
    });
};
