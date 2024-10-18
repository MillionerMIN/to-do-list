import { z } from 'zod';

export const FieldErrorSchema = z.object({
  error: z.string(),
  field: z.string(),
});
