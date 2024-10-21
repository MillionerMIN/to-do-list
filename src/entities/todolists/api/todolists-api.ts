import { TodolistsType } from '../types';
import axios from 'axios';

export const todolistsApi = {
  getTodolists() {
    const promise = axios.get<TodolistsType>(
      'https://social-network.samuraijs.com/api/1.1/todo-lists',
      {
        headers: {
          Authorization: 'Bearer 64f6dc92-a60b-4bfb-b6eb-07fff1337a9d',
        },
      }
    );
    return promise;
  },
  createTodolist(title: string) {
    const promise = axios.post(
      'https://social-network.samuraijs.com/api/1.1/todo-lists',
      { title },
      {
        headers: {
          Authorization: 'Bearer 64f6dc92-a60b-4bfb-b6eb-07fff1337a9d',
          'API-KEY': 'c776464e-9336-49f9-96f6-6e3857c87294',
        },
      }
    );
    return promise;
  },
  removeTodolist(id: string) {
    const promise = axios.delete(
      `https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`,

      {
        headers: {
          Authorization: 'Bearer 64f6dc92-a60b-4bfb-b6eb-07fff1337a9d',
          'API-KEY': 'c776464e-9336-49f9-96f6-6e3857c87294',
        },
      }
    );
    return promise;
  },
  updateTodolistTitle(id: string, title: string) {
    const promise = axios.put(
      `https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`,
      { title },

      {
        headers: {
          Authorization: 'Bearer 64f6dc92-a60b-4bfb-b6eb-07fff1337a9d',
          'API-KEY': 'c776464e-9336-49f9-96f6-6e3857c87294',
        },
      }
    );
    return promise;
  },
};
