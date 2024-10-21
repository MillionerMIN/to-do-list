import axios from 'axios';

export const tasksApi = {
  getTasks(id: string) {
    const promise = axios.get(
      `https://social-network.samuraijs.com/api/1.1/todo-lists/${id}/tasks`,

      {
        headers: {
          Authorization: 'Bearer 64f6dc92-a60b-4bfb-b6eb-07fff1337a9d',
          'API-KEY': 'c776464e-9336-49f9-96f6-6e3857c87294',
        },
      }
    );
    return promise;
  },
  createTask(title: string, todolistId: string) {
    const promise = axios.post(
      `https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks`,
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
  deleteTask(todolistId: string, taskId: string) {
    const promise = axios.delete(
      `https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks/${taskId}`,
      {
        headers: {
          Authorization: 'Bearer 64f6dc92-a60b-4bfb-b6eb-07fff1337a9d',
          'API-KEY': 'c776464e-9336-49f9-96f6-6e3857c87294',
        },
      }
    );
    return promise;
  },
  changeTitleTask(todolistId: string, taskId: string, title: string) {
    const promise = axios.put(
      `https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks/${taskId}`,
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
  changeStatusTask(todolistId: string, taskId: string, isDone: boolean) {
    const promise = axios.put(
      `https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks/${taskId}`,
      { completed: isDone },
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
