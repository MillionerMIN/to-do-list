import { TaskPrioritiesEnum, TaskStatusEnum } from '@/shared';

import { z } from 'zod';

export const UpdateTaskTitleSchema = z.object({
  title: z.string(),
  description: z.optional(z.union([z.string(), z.null()])),
  status: z.optional(TaskStatusEnum),
  priority: z.optional(TaskPrioritiesEnum),
  startDate: z.optional(z.union([z.string(), z.null()])),
  deadline: z.optional(z.union([z.string(), z.null()])),
});

export type UpdateTaskTitleType = z.infer<typeof UpdateTaskTitleSchema>;
