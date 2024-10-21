import { TaskSchema } from './taskSchema.types';
import { z } from 'zod';

export const UpdateTaskResponseSchema = z.object({
  resultCode: z.number(),
  messages: z.array(z.string()),
  data: z.optional(z.object({ item: TaskSchema })),
});
