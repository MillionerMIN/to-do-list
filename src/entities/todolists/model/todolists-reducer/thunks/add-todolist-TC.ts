import {
  CreateTodolistResponseSchema,
  RequestStatus,
  ResultCode,
  TodolistType,
  handleServerAppError,
  handleServerNetworkError,
  setAppStatusAC,
} from '@/shared';

import { Dispatch } from 'redux';
import { addTodolistAC } from '../actions-todolists';
import { todolistsApi } from '@/entities/todolists/api';

export const addTodolistTC = (arg: { title: string }) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC(RequestStatus.Loading));
  todolistsApi
    .createTodolist(arg)
    .then((res) => CreateTodolistResponseSchema.parse(res.data))
    .then((res) => {
      if (res.resultCode === ResultCode.Success) {
        const todolist = res.data?.item as TodolistType;
        dispatch(addTodolistAC(todolist));
        dispatch(setAppStatusAC(RequestStatus.Success));
      } else {
        console.log(res);
        handleServerAppError(res.messages, dispatch);
      }
    })
    .catch((error) => {
      handleServerNetworkError(error, dispatch);
    });
};
