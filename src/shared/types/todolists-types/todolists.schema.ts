import { BaseTodolistResponseSchema } from './base-todolist-response.schema';
import { FilterTodolistSchema } from './filter-todolist.schema';
import { RequestStatusSchema } from '../request-state-type';
import { z } from 'zod';

export const TodolistSchema = z.object({
  id: z.string(),
  title: z.string(),
  addedDate: z.string(),
  order: z.number(),
});

export const TodolistsDtoSchema = z.array(TodolistSchema);
export const TodolistWithFilterSchema = z
  .object({
    id: z.string(),
    title: z.string(),
    addedDate: z.string(),
    order: z.number(),
  })
  .extend({ filter: FilterTodolistSchema, entityStatus: RequestStatusSchema });
export const UpdateTodolistResponseSchema = BaseTodolistResponseSchema(z.object({}));
export const CreateTodolistResponseSchema = BaseTodolistResponseSchema(z.object({ item: z.optional(TodolistSchema) }));
export const DeleteTodolistResponseSchema = BaseTodolistResponseSchema(z.object({}));
