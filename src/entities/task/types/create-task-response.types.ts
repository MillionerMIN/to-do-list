import { TaskSchema } from './taskSchema.types';
import { z } from 'zod';

const FieldErrorSchema = z.object({
  error: z.string(),
  field: z.string(),
});

export const CreateTaskResponseSchema = z.object({
  resultCode: z.number(),
  messages: z.array(z.string()),
  fieldsErrors: z.array(FieldErrorSchema),
  data: z.object({
    item: z.optional(TaskSchema),
  }),
});
