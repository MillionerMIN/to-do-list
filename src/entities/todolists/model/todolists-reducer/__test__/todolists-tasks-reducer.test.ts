import { TasksType, TodolistType, TodolistWithFilterType } from '@/shared';

import { addTodolistAC } from '../actions-todolists';
import { tasksReducer } from '../../../../task';
import { todolistsReducer } from '../todolists-reducer';
import { v1 } from 'uuid';

test('ids should be equals', () => {
  const startTasksState: TasksType = {};
  const startTodolistsState: TodolistWithFilterType[] = [];

  const todolist: TodolistType = { id: v1(), title: 'New todolist', addedDate: '', order: 0 };
  const action = addTodolistAC(todolist);

  const endTasksState = tasksReducer(startTasksState, action);
  const endTodolistsState = todolistsReducer(startTodolistsState, action);

  const keys = Object.keys(endTasksState);
  const idFromTasks = keys[0];
  const idFromTodolists = endTodolistsState[0].id;

  expect(idFromTasks).toBe(action.payload.todolist.id);
  expect(idFromTodolists).toBe(action.payload.todolist.id);
});
