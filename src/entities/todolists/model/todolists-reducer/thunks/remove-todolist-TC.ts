import { DeleteTodolistResponseSchema, RequestStatus, handleServerNetworkError, setAppStatusAC } from '@/shared';
import { changeTodolistEntityStatusAC, removeTodolistAC } from '../actions-todolists';

import { Dispatch } from 'redux';
import { todolistsApi } from '@/entities/todolists/api';

export const removeTodolistTC = (arg: { id: string }) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC(RequestStatus.Loading));
  dispatch(changeTodolistEntityStatusAC({ todoListId: arg.id, entityStatus: RequestStatus.Loading }));
  todolistsApi
    .removeTodolist(arg)
    .then((res) => DeleteTodolistResponseSchema.parse(res.data))
    .then(() => {
      dispatch(removeTodolistAC(arg.id));
      dispatch(setAppStatusAC(RequestStatus.Success));
    })
    .catch((error) => {
      handleServerNetworkError(error, dispatch);
      dispatch(changeTodolistEntityStatusAC({ todoListId: arg.id, entityStatus: RequestStatus.Error }));
    });
};
