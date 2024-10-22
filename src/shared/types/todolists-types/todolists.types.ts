import {
  CreateTodolistResponseSchema,
  DeleteTodolistResponseSchema,
  TodolistSchema,
  TodolistsDtoSchema,
  UpdateTodolistResponseSchema,
} from './todolists.schema';

import { z } from 'zod';

export type TodolistType = z.infer<typeof TodolistSchema>;
export type TodolistsType = z.infer<typeof TodolistsDtoSchema>;
export type UpdateTodolistType = z.infer<typeof UpdateTodolistResponseSchema>;
export type CreateTodolistType = z.infer<typeof CreateTodolistResponseSchema>;
export type DeleteTodolistType = z.infer<typeof DeleteTodolistResponseSchema>;
