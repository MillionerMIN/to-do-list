import { Schema, z } from 'zod';

export const FieldErrorSchema = z.object({
  error: z.string(),
  field: z.string(),
});

export const BaseTodolistResponseSchema = <D extends Schema>(schema: D) =>
  z.object({
    resultCode: z.number(),
    messages: z.array(z.string()),
    fieldsErrors: z.array(FieldErrorSchema),
    data: schema,
  });
