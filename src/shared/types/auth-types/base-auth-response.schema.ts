import { Schema, z } from 'zod';

export const BaseAuthResponseSchema = <D extends Schema>(schema: D) =>
  z.object({
    resultCode: z.number(),
    messages: z.array(z.string()),
    data: schema,
  });
