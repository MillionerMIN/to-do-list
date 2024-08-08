export type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

export const task1: Array<Task> = [
  {
    id: 1,
    title: 'HTML&CSS',
    isDone: true,
  },
  {
    id: 2,
    title: 'JS',
    isDone: true,
  },
  {
    id: 3,
    title: 'React',
    isDone: false,
  },
];

export const task2: Array<Task> = [
  {
    id: 1,
    title: 'Hello World',
    isDone: true,
  },
  {
    id: 2,
    title: 'I am happy',
    isDone: false,
  },
  {
    id: 3,
    title: 'Yo',
    isDone: false,
  },
];
