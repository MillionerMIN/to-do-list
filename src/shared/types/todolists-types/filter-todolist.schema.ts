import { z } from 'zod';

export const FilterTodolistSchema = z.union([z.literal('all'), z.literal('completed'), z.literal('active')]);

export type FilterTodolistType = z.infer<typeof FilterTodolistSchema>;
