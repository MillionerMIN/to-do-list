import { Dispatch } from 'redux';
import { UpdateTodolistResponseSchema } from '@/shared';
import { changedTodolistTitleAC } from '../actions-todolists';
import { todolistsApi } from '@/entities/todolists/api';

export const updateTodolistTitleTC = (arg: { title: string; id: string }) => (dispatch: Dispatch) => {
  todolistsApi
    .updateTodolistTitle(arg)
    .then((res) => UpdateTodolistResponseSchema.parse(res.data))
    .then(() => dispatch(changedTodolistTitleAC(arg)));
};
