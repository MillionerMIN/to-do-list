import { z } from 'zod';

export enum TaskStatus {
  New = 0,
  InProgress = 1,
  Completed = 2,
  Draft = 3,
}

export const TaskStatusEnum = z.nativeEnum(TaskStatus);
export type TaskStatusEnum = z.infer<typeof TaskStatusEnum>;
