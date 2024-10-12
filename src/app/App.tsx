import type { FilterValuesType, TasksStateType, TodolistType } from '../shared';
import { UiAddItemForm, UiAppBar, UiTodolist } from '../shared';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { WithTheme } from './providers';
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
  const [tasks, setTasks] = useState<TasksStateType>({
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

  function addTodolist(title: string) {
    const todolistID = v1();
    const newTodolist: TodolistType = {
      id: todolistID,
      title,
      filter: 'all',
    };
    setTodolists([newTodolist, ...todolists]);
    setTasks({ ...tasks, [todolistID]: [] });
  }

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

  const changeFilter = (todolistId: string, filter: FilterValuesType) => {
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

  const removeTodolist = (todolistId: string) => {
    const newTodolists = todolists.filter((tl) => tl.id !== todolistId);
    setTodolists(newTodolists);
    delete tasks[todolistId];
    setTasks({ ...tasks });
  };

  const updateTask = (taskId: string, title: string, todolistId: string) => {
    const newTodolistTasks = {
      ...tasks,
      [todolistId]: tasks[todolistId].map((t) =>
        t.id === taskId ? { ...t, title } : t
      ),
    };

    setTasks(newTodolistTasks);
  };

  const updateTodolistTitle = (todolistId: string, title: string) => {
    const newTodolistTitle = todolists.map((tl) =>
      tl.id === todolistId ? { ...tl, title } : tl
    );
    setTodolists(newTodolistTitle);
  };

  console.log('$c Render');

  return (
    <WithTheme>
      <UiAppBar />
      <Container className='grid gap-6'>
        <Grid container>
          <UiAddItemForm addItem={addTodolist} />
        </Grid>

        <Grid container spacing={2}>
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
              <Grid key={tl.id}>
                <Paper>
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
                    removeTodolist={removeTodolist}
                    updateTask={updateTask}
                    updateTodolist={updateTodolistTitle}
                  />
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </WithTheme>
  );
}

export default App;
