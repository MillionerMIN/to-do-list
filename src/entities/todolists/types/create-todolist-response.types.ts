import { FieldErrorSchema } from './field-error-schema.types';
import { TodolistSchemaDto } from './get-todolists-dto.types';
import { z } from 'zod';

export const CreateTodolistResponseSchema = z.object({
  resultCode: z.number(),
  messages: z.array(z.string()),
  fieldsErrors: z.array(FieldErrorSchema),
  data: z.object({
    item: z.optional(TodolistSchemaDto),
  }),
});

export type CreateTodolistResponseType = z.infer<
  typeof CreateTodolistResponseSchema
>;
