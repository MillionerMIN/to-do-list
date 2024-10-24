import { Dispatch } from 'redux';
import { TodolistsDtoSchema } from '@/shared';
import { setTodolistsAC } from './actions-todolists';
import { todolistsApi } from '../../api';

export const fetchTodolistsThunk = (dispatch: Dispatch) => {
  todolistsApi
    .getTodolists()
    .then((res) => TodolistsDtoSchema.parse(res.data))
    .then((res) => dispatch(setTodolistsAC(res)));
};
