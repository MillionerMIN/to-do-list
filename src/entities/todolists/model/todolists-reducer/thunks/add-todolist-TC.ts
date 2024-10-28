import { CreateTodolistResponseSchema, RequestStatus, handleServerNetworkError, setAppStatusAC } from '@/shared';

import { Dispatch } from 'redux';
import { addTodolistAC } from '../actions-todolists';
import { todolistsApi } from '@/entities/todolists/api';

export const addTodolistTC = (arg: { title: string }) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC(RequestStatus.Loading));
  todolistsApi
    .createTodolist(arg)
    .then((res) => CreateTodolistResponseSchema.parse(res.data))
    .then((res) => {
      dispatch(addTodolistAC(res.data.item));
      dispatch(setAppStatusAC(RequestStatus.Success));
    })
    .catch((error) => {
      handleServerNetworkError(error, dispatch);
    });
};
