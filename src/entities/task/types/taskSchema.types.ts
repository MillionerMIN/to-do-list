import { z } from 'zod';

export const TaskSchema = z.object({
  description: z.union([z.string(), z.null()]),
  title: z.string(),
  completed: z.optional(z.boolean()),
  status: z.number(),
  priority: z.number(),
  startDate: z.union([z.string(), z.null()]),
  deadline: z.union([z.string(), z.null()]),
  id: z.string(),
  todoListId: z.string(),
  order: z.number(),
  addedDate: z.string(),
});

const TasksSchema = z.record(z.array(TaskSchema));

export type TaskType = z.infer<typeof TaskSchema>;
export type TasksType = z.infer<typeof TasksSchema>;
