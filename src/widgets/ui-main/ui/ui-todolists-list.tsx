import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { UiTodolistCard } from './ui-todolist-card';
import { selectTodolists } from '../../../entities';
import { useAppSelector } from '../../../shared';

export function UiTodolistsList() {
  const todolists = useAppSelector(selectTodolists);

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
