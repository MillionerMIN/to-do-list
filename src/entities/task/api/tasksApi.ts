import {
  CreateTaskType,
  DeleteTaskType,
  GetTasksType,
  TaskType,
  UpdateTaskType,
} from '../../../shared';

import { instanceApi } from '../../../shared';

export const tasksApi = {
  getTasks(id: string) {
    return instanceApi.get<GetTasksType>(`/todo-lists/${id}/tasks`);
  },
  createTask(payload: { title: string; todolistId: string }) {
    const { title, todolistId } = payload;
    return instanceApi.post<CreateTaskType>(`/todo-lists/${todolistId}/tasks`, {
      title,
    });
  },
  deleteTask(payload: { todolistId: string; taskId: string }) {
    const { todolistId, taskId } = payload;
    return instanceApi.delete<DeleteTaskType>(
      `/todo-lists/${todolistId}/tasks/${taskId}`
    );
  },
  changeTitleTask(payload: { task: TaskType; title: string }) {
    const { title } = payload;
    const {
      todoListId,
      id,
      description,

      status,
      priority,
      startDate,
      deadline,
    } = payload.task;
    return instanceApi.put<UpdateTaskType>(
      `/todo-lists/${todoListId}/tasks/${id}`,
      {
        title,
        description,
        status,
        priority,
        startDate,
        deadline,
      }
    );
  },
  changeStatusTask(payload: { task: TaskType; isDone: boolean }) {
    const { isDone } = payload;
    const {
      todoListId,
      id,
      description,
      priority,
      startDate,
      deadline,
      title,
    } = payload.task;

    const status = isDone ? 1 : 0;
    return instanceApi.put<UpdateTaskType>(
      `/todo-lists/${todoListId}/tasks/${id}`,
      {
        title,
        description,
        status,
        priority,
        startDate,
        deadline,
      }
    );
  },
};
