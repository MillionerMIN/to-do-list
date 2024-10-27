import { DeleteTodolistResponseSchema, setAppStatusAC } from '@/shared';

import { Dispatch } from 'redux';
import { removeTodolistAC } from '../actions-todolists';
import { todolistsApi } from '@/entities/todolists/api';

export const removeTodolistTC = (arg: { id: string }) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'));
  todolistsApi
    .removeTodolist(arg)
    .then((res) => DeleteTodolistResponseSchema.parse(res.data))
    .then(() => {
      dispatch(removeTodolistAC(arg.id));
      dispatch(setAppStatusAC('success'));
    });
};
