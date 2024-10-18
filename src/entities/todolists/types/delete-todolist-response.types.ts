import { FieldErrorSchema } from './field-error-schema.types';
import { z } from 'zod';

export const DeleteTodolistResponseSchema = z.object({
  resultCode: z.number(),
  messages: z.array(z.string()),
  fieldsErrors: z.array(FieldErrorSchema),
  data: z.object({}),
});

export type DeleteTodolistResponseType = z.infer<
  typeof DeleteTodolistResponseSchema
>;
