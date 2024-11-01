import { BaseAuthResponseSchema } from './base-auth-response.schema';
import { z } from 'zod';

export const LogInResponseSchema = BaseAuthResponseSchema(
  z.object({ userId: z.number().optional(), token: z.string().optional() })
);

export type LogInResponse = z.infer<typeof LogInResponseSchema>;
