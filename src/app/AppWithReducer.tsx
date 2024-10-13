import {
  UiAddItemForm,
  UiAppBar,
  UiTodolist,
  addTaskAC,
  addTodolistAC,
  changeTaskStatusAC,
  changeTaskTitleAC,
  changedTodolistFilterAC,
  changedTodolistTitleAC,
  removeTaskAC,
  removeTodolistAC,
  tasksReducer,
  todolistsReducer,
} from '../shared';

import Container from '@mui/material/Container';
import type { FilterValuesType } from '../shared';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { WithTheme } from './providers';
import { useReducer } from 'react';
import { v1 } from 'uuid';

export function AppWithReducer() {
  let todolistID1 = v1();
  let todolistID2 = v1();

  const [todolists, dispatchToTodolists] = useReducer(todolistsReducer, [
    {
      id: todolistID1,
      title: 'What to learn',
      filter: 'all',
    },
    { id: todolistID2, title: 'What to buy', filter: 'all' },
  ]);
  const [tasks, dispatchToTasks] = useReducer(tasksReducer, {
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
    const action = addTodolistAC(title);
    dispatchToTodolists(action);
    dispatchToTasks(action);
  }

  const addTask = (title: string, todolistId: string) => {
    dispatchToTasks(addTaskAC({ title, todolistId }));
  };
  const removeTask = (taskId: string, todolistId: string) => {
    dispatchToTasks(removeTaskAC({ taskId, todolistId }));
  };

  const changeFilter = (todolistId: string, filter: FilterValuesType) => {
    dispatchToTodolists(changedTodolistFilterAC(todolistId, filter));
  };

  const changeTaskStatus = (
    taskId: string,
    isDone: boolean,
    todolistId: string
  ) => {
    dispatchToTasks(changeTaskStatusAC({ taskId, isDone, todolistId }));
  };

  const removeTodolist = (todolistId: string) => {
    const action = removeTodolistAC(todolistId);
    dispatchToTodolists(action);
    dispatchToTasks(action);
  };

  const updateTask = (taskId: string, title: string, todolistId: string) => {
    dispatchToTasks(changeTaskTitleAC({ taskId, title, todolistId }));
  };

  const updateTodolistTitle = (todolistId: string, title: string) => {
    dispatchToTodolists(changedTodolistTitleAC(todolistId, title));
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
