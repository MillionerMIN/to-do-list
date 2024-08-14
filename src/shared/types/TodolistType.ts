import { FilterValues } from './FilterValues';
import { Task } from './Task';

export type TodolistType = {
  id: string;
  title: string;
  filter: FilterValues;
};
