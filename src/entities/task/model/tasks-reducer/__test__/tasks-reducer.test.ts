import { addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC } from '../tasks-actions';
import { addTodolistAC, removeTodolistAC } from '../../../../todolists';

import { TasksStateType } from '../../../../../shared';
import { tasksReducer } from '../tasks-reducer';

let startState: TasksStateType = {};

beforeEach(() => {
  startState = {
    todoListId1: [
      { id: '1', title: 'CSS', isDone: false },
      { id: '2', title: 'JS', isDone: true },
      { id: '3', title: 'React', isDone: false },
    ],
    todoListId2: [
      { id: '1', title: 'bread', isDone: false },
      { id: '2', title: 'milk', isDone: true },
      { id: '3', title: 'tea', isDone: false },
    ],
  };
});

test('correct task should be deleted from correct array', () => {
  const endState = tasksReducer(startState, removeTaskAC({ taskId: '2', todoListId: 'todoListId2' }));

  expect(endState).toEqual({
    todoListId1: [
      { id: '1', title: 'CSS', isDone: false },
      { id: '2', title: 'JS', isDone: true },
      { id: '3', title: 'React', isDone: false },
    ],
    todoListId2: [
      { id: '1', title: 'bread', isDone: false },
      { id: '3', title: 'tea', isDone: false },
    ],
  });
});

test('correct task should be added to correct array', () => {
  const endState = tasksReducer(startState, addTaskAC({ title: 'juce', todoListId: 'todoListId2' }));

  expect(endState['todoListId1'].length).toBe(3);
  expect(endState['todoListId2'].length).toBe(4);
  expect(endState['todoListId2'][0].id).toBeDefined();
  expect(endState['todoListId2'][0].title).toBe('bread');
  expect(endState['todoListId2'][0].isDone).toBe(false);
});

test('status of specified task should be changed', () => {
  const endState = tasksReducer(
    startState,
    changeTaskStatusAC({
      taskId: '2',
      isDone: false,
      todoListId: 'todoListId2',
    })
  );

  expect(endState['todoListId2'][1].isDone).toBe(false);
  expect(endState['todoListId1'][1].isDone).toBe(true);
});

test('title of specified task should be changed', () => {
  const endState = tasksReducer(
    startState,
    changeTaskTitleAC({
      taskId: '2',
      title: 'New title for task',
      todoListId: 'todoListId2',
    })
  );

  expect(endState['todoListId2'][1].title).toBe('New title for task');
});

test('new array should be added when new todolist is added', () => {
  const endState = tasksReducer(startState, addTodolistAC('new todolist'));

  const keys = Object.keys(endState);
  const newKey = keys.find((k) => k !== 'todoListId1' && k !== 'todoListId2');
  if (!newKey) {
    throw Error('new key should be added');
  }

  expect(keys.length).toBe(3);
  expect(endState[newKey]).toEqual([]);
});

test('property with todoListId should be deleted', () => {
  const action = removeTodolistAC('todoListId2');

  const endState = tasksReducer(startState, action);

  const keys = Object.keys(endState);

  expect(keys.length).toBe(1);
  expect(endState['todoListId2']).not.toBeDefined();
  // or
  expect(endState['todoListId2']).toBeUndefined();
});
