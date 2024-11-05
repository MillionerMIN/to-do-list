import { ZodType, z } from 'zod';

export type AuthForm = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export const AuthSchema: ZodType<AuthForm> = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(3, 'Password must be at least 3 characters long')
    .max(20, 'Password must be at most 20 characters long'),
  rememberMe: z.boolean().optional(),
});
