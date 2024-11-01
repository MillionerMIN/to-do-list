import { BaseAuthResponseSchema } from './base-auth-response.schema';
import { z } from 'zod';

export const LogOutResponseSchema = BaseAuthResponseSchema(
  z.object({ userId: z.number().optional(), token: z.string().optional() })
);

export type LogOutResponse = z.infer<typeof LogOutResponseSchema>;
