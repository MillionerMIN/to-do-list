import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { UiAddTodolistForm } from '../../../features';
import { UiTodolistsList } from './ui-todolists-list';

export function UiMain() {
  return (
    <Container className='grid gap-6'>
      <Grid container>
        <UiAddTodolistForm />
      </Grid>

      <Grid container spacing={2}>
        <UiTodolistsList />
      </Grid>
    </Container>
  );
}
