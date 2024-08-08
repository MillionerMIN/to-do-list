export type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

export const task1: Array<Task> = [
  { id: 1, title: 'HTML&CSS', isDone: true },
  { id: 2, title: 'JS', isDone: true },
  { id: 3, title: 'React', isDone: false },
  { id: 4, title: 'Redux', isDone: false },
  { id: 5, title: 'Typescript', isDone: false },
  { id: 6, title: 'RTK query', isDone: false },
];

export const task2: Array<Task> = [];
