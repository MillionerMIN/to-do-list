import './styles/App.css';

import type { FilterValues, TodolistType } from '../shared';

import { UiTodolist } from '../shared';
import { useState } from 'react';
import { v1 } from 'uuid';

function App() {
  let todolistID1 = v1();
  let todolistID2 = v1();

  const [todolists, setTodolists] = useState<TodolistType[]>([
    {
      id: todolistID1,
      title: 'What to learn',
      filter: 'all',
    },
    { id: todolistID2, title: 'What to buy', filter: 'all' },
  ]);
  const [tasks, setTasks] = useState({
    [todolistID1]: [
      { id: v1(), title: 'Redux', isDone: false },
      { id: v1(), title: 'Typescript', isDone: false },
      { id: v1(), title: 'RTK query', isDone: false },
    ],
    [todolistID2]: [
      { id: v1(), title: 'Milk', isDone: false },
      { id: v1(), title: 'Bread', isDone: true },
    ],
  });

  const addTask = (title: string, todolistId: string) => {
    const newTask = {
      id: v1(),
      title,
      isDone: false,
    };

    const newTasks = {
      ...tasks,
      [todolistId]: [newTask, ...tasks[todolistId]],
    };
    setTasks(newTasks);
  };
  const removeTask = (taskId: string, todolistId: string) => {
    const newTodolistTasks = {
      ...tasks,
      [todolistId]: tasks[todolistId].filter((task) => task.id !== taskId),
    };
    setTasks(newTodolistTasks);
  };

  const changeFilter = (todolistId: string, filter: FilterValues) => {
    const todolist = todolists.map((tl) =>
      tl.id === todolistId ? { ...tl, filter } : tl
    );
    setTodolists(todolist);
  };

  const changeTaskStatus = (
    taskId: string,
    taskStatus: boolean,
    todolistId: string
  ) => {
    const task = {
      ...tasks,
      [todolistId]: tasks[todolistId].map((task) =>
        task.id === taskId ? { ...task, isDone: taskStatus } : task
      ),
    };
    setTasks(task);
  };

  console.log('$c Render');

  return (
    <div className='App'>
      {todolists.map((tl) => {
        const { title, filter, id } = tl;

        let tasksForTodolist = tasks[tl.id];

        if (filter === 'active') {
          tasksForTodolist = tasks[tl.id].filter((task) => !task.isDone);
        }

        if (filter === 'completed') {
          tasksForTodolist = tasks[tl.id].filter((task) => task.isDone);
        }

        return (
          <UiTodolist
            key={id}
            todolistId={id}
            title={title}
            tasks={tasksForTodolist}
            date='08.08.2022'
            filter={filter}
            addTask={addTask}
            changeTaskStatus={changeTaskStatus}
            removeTask={removeTask}
            changeFilter={changeFilter}
          />
        );
      })}
    </div>
  );
}

export default App;
