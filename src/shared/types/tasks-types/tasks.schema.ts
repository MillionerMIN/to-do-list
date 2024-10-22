import { BaseTasksResponseSchema } from './base-tasks-response.schema';
import { z } from 'zod';

export const TaskSchema = z.object({
  description: z.union([z.string(), z.null()]),
  title: z.string(),
  status: z.number(),
  priority: z.number(),
  startDate: z.union([z.string(), z.null()]),
  deadline: z.union([z.string(), z.null()]),
  id: z.string(),
  todoListId: z.string(),
  order: z.number(),
  addedDate: z.string(),
});

export const TasksSchema = z.record(z.array(TaskSchema));

export const GetTasksResponseSchema = z.object({
  error: z.optional(z.union([z.string(), z.null()])),
  totalCount: z.number(),
  items: z.array(
    z.object({
      item: z.optional(TaskSchema),
    })
  ),
});

export const CreateTaskResponseSchema = BaseTasksResponseSchema(
  z.object({
    item: z.optional(TaskSchema),
  })
);
export const DeleteTaskResponseSchema = BaseTasksResponseSchema(z.object({}));
export const UpdateTaskResponseSchema = BaseTasksResponseSchema(
  z.object({ item: TaskSchema })
);
