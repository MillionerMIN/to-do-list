import { DeleteTodolistResponseSchema, setAppStatusAC } from '@/shared';
import { changeTodolistEntityStatusAC, removeTodolistAC } from '../actions-todolists';

import { Dispatch } from 'redux';
import { todolistsApi } from '@/entities/todolists/api';

export const removeTodolistTC = (arg: { id: string }) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'));
  dispatch(changeTodolistEntityStatusAC({ todoListId: arg.id, entityStatus: 'loading' }));
  todolistsApi
    .removeTodolist(arg)
    .then((res) => DeleteTodolistResponseSchema.parse(res.data))
    .then(() => {
      dispatch(removeTodolistAC(arg.id));
      dispatch(setAppStatusAC('success'));
    });
};
