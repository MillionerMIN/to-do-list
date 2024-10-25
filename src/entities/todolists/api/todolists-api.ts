import { CreateTodolistType, DeleteTodolistType, UpdateTodolistType } from '@/shared';

import { TodolistsType } from '@/shared';
import { instanceApi } from '@/shared';

export const todolistsApi = {
  getTodolists() {
    return instanceApi.get<TodolistsType>('/todo-lists');
  },
  createTodolist(title: string) {
    return instanceApi.post<CreateTodolistType>('/todo-lists', {
      title,
    });
  },
  removeTodolist(id: string) {
    return instanceApi.delete<DeleteTodolistType>(`/todo-lists/${id}`);
  },
  updateTodolistTitle(payload: { id: string; title: string }) {
    const { id, title } = payload;
    return instanceApi.put<UpdateTodolistType>(`/todo-lists/${id}`, { title });
  },
};
