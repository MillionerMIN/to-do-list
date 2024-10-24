import { BaseTodolistResponseSchema } from './base-todolist-response.schema';
import { FilterTodolistSchema } from './filter-todolist.schema';
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
  .extend({ filter: FilterTodolistSchema });
export const UpdateTodolistResponseSchema = BaseTodolistResponseSchema(z.object({}));
export const CreateTodolistResponseSchema = BaseTodolistResponseSchema(z.object({ item: TodolistSchema }));
export const DeleteTodolistResponseSchema = BaseTodolistResponseSchema(z.object({}));
