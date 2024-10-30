import { RequestStatus, UpdateTodolistResponseSchema, handleServerNetworkError, setAppStatusAC } from '@/shared';

import { Dispatch } from 'redux';
import { changeTodolistTitleAC } from '../actions-todolists';
import { todolistsApi } from '@/entities/todolists/api';

export const updateTodolistTitleTC = (arg: { title: string; id: string }) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC(RequestStatus.Loading));
  todolistsApi
    .updateTodolistTitle(arg)
    .then((res) => UpdateTodolistResponseSchema.parse(res.data))
    .then(() => {
      dispatch(changeTodolistTitleAC(arg));
      dispatch(setAppStatusAC(RequestStatus.Success));
    })
    .catch((error) => {
      handleServerNetworkError(error, dispatch);
    });
};
