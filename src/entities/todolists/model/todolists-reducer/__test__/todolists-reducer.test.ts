import { TodolistType, TodolistWithFilterType } from '@/shared';
import {
  addTodolistAC,
  changeTodolistEntityStatusAC,
  changeTodolistFilterAC,
  changeTodolistTitleAC,
  removeTodolistAC,
} from '../actions-todolists';

import { todolistsReducer } from '../todolists-reducer';
import { v1 } from 'uuid';

let todoListId1: string;
let todoListId2: string;
let startState: TodolistWithFilterType[] = [];

beforeEach(() => {
  todoListId1 = v1();
  todoListId2 = v1();

  startState = [
    {
      id: todoListId1,
      title: 'What to learn',
      addedDate: '',
      order: 0,
      filter: 'all',
      entityStatus: 'idle',
    },
    { id: todoListId2, title: 'What to buy', addedDate: '', order: 0, filter: 'all', entityStatus: 'idle' },
  ];
});

test('correct todolist should be removed', () => {
  const endState = todolistsReducer(startState, removeTodolistAC(todoListId1));

  expect(endState.length).toBe(1);

  expect(endState[0].id).toBe(todoListId2);
});

test('correct todolist should be added', () => {
  const todolist: TodolistType = { id: v1(), title: 'New todolist', addedDate: '', order: 0 };

  const endState = todolistsReducer(startState, addTodolistAC(todolist));

  expect(endState.length).toBe(3);
  expect(endState[2].title).toBe(todolist.title);
});

test('correct todolist should be change title', () => {
  const newTitle = 'Change title';

  const endState = todolistsReducer(startState, changeTodolistTitleAC({ id: todoListId2, title: newTitle }));

  expect(endState[0].title).toBe('What to learn');
  expect(endState[1].title).toBe(newTitle);
});

test('correct filter of todolist should be change', () => {
  const newFilter = 'completed';

  const endState = todolistsReducer(startState, changeTodolistFilterAC({ todoListId: todoListId2, filter: newFilter }));

  expect(endState[0].filter).toBe('all');
  expect(endState[1].filter).toBe(newFilter);
});

test('correct entityStatus of todolist should be change', () => {
  const newStatus = 'loading';

  const endState = todolistsReducer(
    startState,
    changeTodolistEntityStatusAC({ todoListId: todoListId2, entityStatus: newStatus })
  );

  expect(endState[0].entityStatus).toBe('idle');
  expect(endState[1].entityStatus).toBe(newStatus);
});
