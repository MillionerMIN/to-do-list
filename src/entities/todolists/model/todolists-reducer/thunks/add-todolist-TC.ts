import { CreateTodolistResponseSchema } from '@/shared';
import { Dispatch } from 'redux';
import { addTodolistAC } from '../actions-todolists';
import { todolistsApi } from '@/entities/todolists/api';

export const addTodolistTC = (arg: { title: string }) => (dispatch: Dispatch) => {
  todolistsApi
    .createTodolist(arg)
    .then((res) => CreateTodolistResponseSchema.parse(res.data))
    .then((res) => dispatch(addTodolistAC(res.data.item)));
};
