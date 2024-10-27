import { z } from 'zod';

export enum TaskPriorities {
  Low = 0,
  Middle = 1,
  Hi = 2,
  Urgently = 3,
  Later = 4,
}

export const TaskPrioritiesEnum = z.nativeEnum(TaskPriorities);
export type TaskPrioritiesEnum = z.infer<typeof TaskPrioritiesEnum>;
