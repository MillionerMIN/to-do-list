import './styles/App.css';

import type { FilterValues, Task } from '../shared';

import { UiTodolist } from '../shared';
import { useState } from 'react';
import { v1 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'React', isDone: false },
    { id: v1(), title: 'Redux', isDone: false },
    { id: v1(), title: 'Typescript', isDone: false },
    { id: v1(), title: 'RTK query', isDone: false },
  ]);

  const [filter, setFilter] = useState<FilterValues>('all');

  let tasksForTodolist = tasks;

  if (filter === 'active') {
    tasksForTodolist = tasks.filter((task) => !task.isDone);
  }

  if (filter === 'completed') {
    tasksForTodolist = tasks.filter((task) => task.isDone);
  }

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

  const changeFilter = (filter: FilterValues) => {
    setFilter(filter);
  };

  console.log('$c Render');

  return (
    <div className='App'>
      <UiTodolist
        title='What to learn'
        tasks={tasksForTodolist}
        date='08.08.2022'
        addTask={addTask}
        removeTask={removeTask}
        changeFilter={changeFilter}
      />
    </div>
  );
}

export default App;
