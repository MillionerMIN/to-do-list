import { CreateTodolistResponseSchema, setAppStatusAC } from '@/shared';

import { Dispatch } from 'redux';
import { addTodolistAC } from '../actions-todolists';
import { todolistsApi } from '@/entities/todolists/api';

export const addTodolistTC = (arg: { title: string }) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'));
  todolistsApi
    .createTodolist(arg)
    .then((res) => CreateTodolistResponseSchema.parse(res.data))
    .then((res) => {
      dispatch(addTodolistAC(res.data.item));
      setAppStatusAC('success');
    });
};
