import { fetchTodolistsThunk, selectTodolists } from '@/entities';
import { useAppDispatch, useAppSelector } from '@/shared';

import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { UiTodolistCard } from './ui-todolist-card';
import { useEffect } from 'react';

export function UiTodolistsList() {
  const todolists = useAppSelector(selectTodolists);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodolistsThunk);
  }, []);

  return (
    <>
      {todolists.map((tl) => {
        return (
          <Grid key={tl.id}>
            <Paper>
              <UiTodolistCard key={tl.id} todolistId={tl.id} />
            </Paper>
          </Grid>
        );
      })}
    </>
  );
}
