import './styles/App.css';

import type { FilterValues, Task, TodolistType } from '../shared';

import { UiTodolist } from '../shared';
import { useState } from 'react';
import { v1 } from 'uuid';

function App() {
  const [todolists, setTodolists] = useState<TodolistType[]>([
    { id: v1(), title: 'What to learn', filter: 'all' },
    { id: v1(), title: 'What to buy', filter: 'all' },
  ]);
  const [tasks, setTasks] = useState<Task[]>([
    { id: v1(), title: 'Redux', isDone: false },
    { id: v1(), title: 'Typescript', isDone: false },
    { id: v1(), title: 'RTK query', isDone: false },
    { id: v1(), title: 'RTK query', isDone: true },
    { id: v1(), title: 'RTK query', isDone: true },
    { id: v1(), title: 'RTK query', isDone: false },
  ]);

  const addTask = (title: string) => {
    const newTask = {
      id: v1(),
      title,
      isDone: false,
    };

    const newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  };
  const removeTask = (taskId: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const changeFilter = (todolistId: string, filter: FilterValues) => {
    const todolist = todolists.map((tl) =>
      tl.id === todolistId ? { ...tl, filter } : tl
    );
    setTodolists(todolist);
  };

  const changeTaskStatus = (taskId: string, taskStatus: boolean) => {
    const task = tasks.map((task) =>
      task.id === taskId ? { ...task, isDone: taskStatus } : task
    );
    setTasks(task);
  };

  console.log('$c Render');

  return (
    <div className='App'>
      {todolists.map((tl) => {
        const { title, filter, id } = tl;

        let tasksForTodolist = tasks;

        if (filter === 'active') {
          tasksForTodolist = tasks.filter((task) => !task.isDone);
        }

        if (filter === 'completed') {
          tasksForTodolist = tasks.filter((task) => task.isDone);
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
