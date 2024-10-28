import { z } from 'zod';

export const RequestStatusSchema = z.union([
  z.literal('loading'),
  z.literal('success'),
  z.literal('error'),
  z.literal('idle'),
  z.literal('failed'),
]);

export type RequestState = z.infer<typeof RequestStatusSchema>;
