import { z } from 'zod';
export const TodolistSchemaDto = z.object({
  id: z.string(),
  title: z.string(),
  addedDate: z.string(),
  order: z.number(),
});

export const GetTodolistsSchemaDto = z.array(TodolistSchemaDto);

export type TodolistType = z.infer<typeof TodolistSchemaDto>;
export type TodolistsType = z.infer<typeof GetTodolistsSchemaDto>;
