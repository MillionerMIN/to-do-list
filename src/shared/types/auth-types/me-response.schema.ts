import { BaseAuthResponseSchema } from './base-auth-response.schema';
import { z } from 'zod';

export const MeResponseSchema = BaseAuthResponseSchema(
  z.object({
    id: z.number().optional(),
    email: z.string().optional(),
    login: z.string().optional(),
  })
);

export type MeResponse = z.infer<typeof MeResponseSchema>;
