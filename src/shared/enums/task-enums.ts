import { z } from 'zod';

export enum TaskStatus {
  New = 0,
  InProgress = 1,
  Completed = 2,
  Draft = 3,
}

export const TaskStatusEnum = z.nativeEnum(TaskStatus);
export type TaskStatusEnum = z.infer<typeof TaskStatusEnum>;

export enum TaskPriorities {
  Low = 0,
  Middle = 1,
  Hi = 2,
  Urgently = 3,
  Later = 4,
}

export const TaskPrioritiesEnum = z.nativeEnum(TaskPriorities);
export type TaskPrioritiesEnum = z.infer<typeof TaskPrioritiesEnum>;
