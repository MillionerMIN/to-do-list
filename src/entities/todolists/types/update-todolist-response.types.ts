import { FieldErrorSchema } from './field-error-schema.types';
import { z } from 'zod';

export const UpdateTodolistResponseSchema = z.object({
  resultCode: z.number(),
  messages: z.array(z.string()),
  fieldsErrors: z.array(FieldErrorSchema),
  data: z.object({}),
});

export type UpdateTodolistResponseType = z.infer<
  typeof UpdateTodolistResponseSchema
>;
