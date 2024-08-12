import './styles/App.css';

import { Task, UiTodolist } from '../shared';

import type { FilterValues } from '../shared';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
    { id: 4, title: 'Redux', isDone: false },
    { id: 5, title: 'Typescript', isDone: false },
    { id: 6, title: 'RTK query', isDone: false },
  ]);

  const [filter, setFilter] = useState<FilterValues>('all');

  let tasksForTodolist = tasks;

  if (filter === 'active') {
    tasksForTodolist = tasks.filter((task) => !task.isDone);
  }

  if (filter === 'completed') {
    tasksForTodolist = tasks.filter((task) => task.isDone);
  }
  const removeTask = (taskId: number) => {
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
        removeTask={removeTask}
        changeFilter={changeFilter}
      />
    </div>
  );
}

export default App;
