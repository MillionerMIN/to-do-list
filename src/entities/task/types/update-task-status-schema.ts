import { TaskPrioritiesEnum, TaskStatusEnum } from '@/shared';

import { z } from 'zod';

export const UpdateTaskStatusSchema = z.object({
  title: z.string(),
  description: z.union([z.string(), z.null()]),
  status: TaskStatusEnum,
  priority: TaskPrioritiesEnum,
  startDate: z.union([z.string(), z.null()]),
  deadline: z.union([z.string(), z.null()]),
});

export type UpdateTaskStatusType = z.infer<typeof UpdateTaskStatusSchema>;
