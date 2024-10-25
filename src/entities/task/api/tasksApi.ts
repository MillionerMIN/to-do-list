import { CreateTaskType, DeleteTaskType, GetTasksType, UpdateTaskType } from '@/shared';
import { UpdateTaskStatusType, UpdateTaskTitleType } from '../types';

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
  changeTitleTask(payload: { taskId: string; todoListId: string; model: UpdateTaskTitleType }) {
    const { taskId, todoListId } = payload;

    return instanceApi.put<UpdateTaskType>(`/todo-lists/${todoListId}/tasks/${taskId}`, payload.model);
  },
  updateStatusTask(payload: { taskId: string; todoListId: string; model: UpdateTaskStatusType }) {
    const { taskId, todoListId } = payload;

    return instanceApi.put<UpdateTaskType>(`/todo-lists/${todoListId}/tasks/${taskId}`, payload.model);
  },
};
