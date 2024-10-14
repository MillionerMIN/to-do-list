import type { FilterValuesType, TasksStateType, TodolistType } from '../shared';
import {
  RootState,
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
} from '../shared';
import { WithRedux, WithTheme } from './providers';
import { useDispatch, useSelector } from 'react-redux';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';

function App() {
  const todolists = useSelector<RootState, TodolistType[]>(
    (state) => state.todolists
  );
  const tasks = useSelector<RootState, TasksStateType>((state) => state.tasks);
  const dispatch = useDispatch();

  function addTodolist(title: string) {
    dispatch(addTodolistAC(title));
  }

  const addTask = (title: string, todolistId: string) => {
    dispatch(addTaskAC({ title, todolistId }));
  };
  const removeTask = (taskId: string, todolistId: string) => {
    dispatch(removeTaskAC({ taskId, todolistId }));
  };

  const changeFilter = (todolistId: string, filter: FilterValuesType) => {
    dispatch(changedTodolistFilterAC({ todolistId, filter }));
  };

  const changeTaskStatus = (
    taskId: string,
    isDone: boolean,
    todolistId: string
  ) => {
    dispatch(changeTaskStatusAC({ taskId, isDone, todolistId }));
  };

  const removeTodolist = (todolistId: string) => {
    dispatch(removeTodolistAC(todolistId));
  };

  const updateTask = (taskId: string, title: string, todolistId: string) => {
    dispatch(changeTaskTitleAC({ taskId, title, todolistId }));
  };

  const updateTodolistTitle = (todolistId: string, title: string) => {
    dispatch(changedTodolistTitleAC({ todolistId, title }));
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

export function AppWithRedux() {
  return <WithRedux children={<App />} />;
}
