import {
  CreateTaskResponseSchema,
  DeleteTaskResponseSchema,
  GetTasksResponseSchema,
  TaskSchema,
  TasksSchema,
  UpdateTaskResponseSchema,
} from './tasks.schema';

import { z } from 'zod';

export type TaskType = z.infer<typeof TaskSchema>;
export type TasksType = z.infer<typeof TasksSchema>;

export type GetTasksType = z.infer<typeof GetTasksResponseSchema>;
export type CreateTaskType = z.infer<typeof CreateTaskResponseSchema>;
export type DeleteTaskType = z.infer<typeof DeleteTaskResponseSchema>;
export type UpdateTaskType = z.infer<typeof UpdateTaskResponseSchema>;
