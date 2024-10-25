import { CreateTaskType, DeleteTaskType, GetTasksType, TaskStatus, TaskType, UpdateTaskType } from '@/shared';

import { UpdateTaskParamsType } from '../types';
import { instanceApi } from '@/shared';

export const tasksApi = {
  getTasks(id: string) {
    return instanceApi.get<GetTasksType>(`/todo-lists/${id}/tasks`);
  },
  createTask(payload: { title: string; todoListId: string }) {
    const { title, todoListId } = payload;
    return instanceApi.post<CreateTaskType>(`/todo-lists/${todoListId}/tasks`, {
      title,
    });
  },
  deleteTask(payload: { todoListId: string; taskId: string }) {
    const { todoListId, taskId } = payload;
    return instanceApi.delete<DeleteTaskType>(`/todo-lists/${todoListId}/tasks/${taskId}`);
  },
  changeTitleTask(payload: { task: TaskType; title: string }) {
    const { title } = payload;
    const { todoListId, id, description, status, priority, startDate, deadline } = payload.task;
    return instanceApi.put<UpdateTaskType>(`/todo-lists/${todoListId}/tasks/${id}`, {
      title,
      description,
      status,
      priority,
      startDate,
      deadline,
    });
  },
  updateStatusTask(payload: { taskId: string; todoListId: string; model: UpdateTaskParamsType }) {
    const { taskId, todoListId } = payload;

    return instanceApi.put<UpdateTaskType>(`/todo-lists/${todoListId}/tasks/${taskId}`, payload.model);
  },
};
