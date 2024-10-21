import { TaskSchema } from './taskSchema.types';
import { z } from 'zod';

export const GetTasksResponseSchema = z.object({
  error: z.optional(z.union([z.string(), z.null()])),
  totalCount: z.number(),
  items: z.array(
    z.object({
      item: z.optional(TaskSchema),
    })
  ),
});
