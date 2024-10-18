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
};
