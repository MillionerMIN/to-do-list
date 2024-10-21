import { z } from 'zod';

export const DeleteTaskResponse = z.object({
  resultCode: z.number(),
  messages: z.array(z.string()),
  data: z.object({}),
});
