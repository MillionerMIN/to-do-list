import { TaskPriorities, TaskStatus, TasksType } from '@/shared';
import { addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC } from '../tasks-actions';
import { addTodolistAC, removeTodolistAC } from '@/entities';

import { tasksReducer } from '../tasks-reducer';

let startState: TasksType = {};

beforeEach(() => {
  startState = {
    todoListId1: [
      {
        id: '1',
        todoListId: 'todoListId1',
        title: 'CSS',
        status: TaskStatus.New,
        description: '',
        priority: TaskPriorities.Low,
        startDate: '',
        deadline: '',
        order: 0,
        addedDate: '',
      },
      {
        id: '2',
        todoListId: 'todoListId1',
        title: 'JS',
        status: TaskStatus.Completed,
        description: '',
        priority: TaskPriorities.Low,
        startDate: '',
        deadline: '',
        order: 0,
        addedDate: '',
      },
      {
        id: '3',
        todoListId: 'todoListId1',
        title: 'React',
        status: TaskStatus.Completed,
        description: '',
        priority: TaskPriorities.Low,
        startDate: '',
        deadline: '',
        order: 0,
        addedDate: '',
      },
    ],
    todoListId2: [
      {
        id: '1',
        todoListId: 'todoListId2',
        title: 'bread',
        status: TaskStatus.New,
        description: '',
        priority: TaskPriorities.Low,
        startDate: '',
        deadline: '',
        order: 0,
        addedDate: '',
      },
      {
        id: '2',
        todoListId: 'todoListId2',
        title: 'milk',
        status: TaskStatus.New,
        description: '',
        priority: TaskPriorities.Low,
        startDate: '',
        deadline: '',
        order: 0,
        addedDate: '',
      },
      {
        id: '3',
        todoListId: 'todoListId2',
        title: 'tea',
        status: TaskStatus.New,
        description: '',
        priority: TaskPriorities.Low,
        startDate: '',
        deadline: '',
        order: 0,
        addedDate: '',
      },
    ],
  };
});

test('correct task should be deleted from correct array', () => {
  const endState = tasksReducer(startState, removeTaskAC({ taskId: '2', todoListId: 'todoListId2' }));

  expect(endState).toEqual({
    todoListId1: [
      {
        id: '1',
        todoListId: 'todoListId1',
        title: 'CSS',
        status: TaskStatus.New,
        description: '',
        priority: TaskPriorities.Low,
        startDate: '',
        deadline: '',
        order: 0,
        addedDate: '',
      },
      {
        id: '2',
        todoListId: 'todoListId1',
        title: 'JS',
        status: TaskStatus.Completed,
        description: '',
        priority: TaskPriorities.Low,
        startDate: '',
        deadline: '',
        order: 0,
        addedDate: '',
      },
      {
        id: '3',
        todoListId: 'todoListId1',
        title: 'React',
        status: TaskStatus.Completed,
        description: '',
        priority: TaskPriorities.Low,
        startDate: '',
        deadline: '',
        order: 0,
        addedDate: '',
      },
    ],
    todoListId2: [
      {
        id: '1',
        todoListId: 'todoListId2',
        title: 'bread',
        status: TaskStatus.New,
        description: '',
        priority: TaskPriorities.Low,
        startDate: '',
        deadline: '',
        order: 0,
        addedDate: '',
      },
      {
        id: '3',
        todoListId: 'todoListId2',
        title: 'tea',
        status: TaskStatus.New,
        description: '',
        priority: TaskPriorities.Low,
        startDate: '',
        deadline: '',
        order: 0,
        addedDate: '',
      },
    ],
  });
});

test('correct task should be added to correct array', () => {
  const task = {
    id: '3',
    todoListId: 'todoListId2',
    title: 'juce',
    status: TaskStatus.New,
    description: '',
    priority: TaskPriorities.Low,
    startDate: '',
    deadline: '',
    order: 0,
    addedDate: '',
  };
  const endState = tasksReducer(startState, addTaskAC({ task }));

  expect(endState['todoListId1'].length).toBe(3);
  expect(endState['todoListId2'].length).toBe(4);
  expect(endState['todoListId2'][0].id).toBeDefined();
  expect(endState['todoListId2'][1].title).toBe('bread');
  expect(endState['todoListId2'][0].status).toBe(TaskStatus.New);
});

test('status of specified task should be changed', () => {
  const task = {
    id: '2',
    todoListId: 'todoListId2',
    title: 'juce',
    status: TaskStatus.New,
    description: '',
    priority: TaskPriorities.Low,
    startDate: '',
    deadline: '',
    order: 0,
    addedDate: '',
  };
  const endState = tasksReducer(startState, changeTaskStatusAC({ task }));

  expect(endState['todoListId2'][1].status).toBe(TaskStatus.New);
  expect(endState['todoListId1'][1].status).toBe(TaskStatus.Completed);
});

test('title of specified task should be changed', () => {
  const task = {
    id: '2',
    todoListId: 'todoListId2',
    title: 'New title for task',
    status: TaskStatus.New,
    description: '',
    priority: TaskPriorities.Low,
    startDate: '',
    deadline: '',
    order: 0,
    addedDate: '',
  };
  const endState = tasksReducer(startState, changeTaskTitleAC({ task }));

  expect(endState['todoListId2'][1].title).toBe('New title for task');
});

test('new array should be added when new todolist is added', () => {
  const endState = tasksReducer(
    startState,
    addTodolistAC({ id: 'todoListId3', title: 'new todolist', addedDate: '', order: 0 })
  );

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
