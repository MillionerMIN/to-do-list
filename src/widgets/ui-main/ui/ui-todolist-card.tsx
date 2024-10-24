import { UiEditableTitleTodolist, UiFilterTasksButtons, UiRemoveTodolistBtn } from '@/features';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { UiTasksList } from './ui-tasks-list';
import { selectTodolistById } from '@/entities';
import { useAppSelector } from '@/shared';

type PropsType = {
  todolistId: string;
};

export function UiTodolistCard({ todolistId }: PropsType) {
  const todolist = useAppSelector(selectTodolistById(todolistId));
  return (
    <Card>
      <CardContent>
        <div className='flex justify-between'>
          <UiEditableTitleTodolist todolistId={todolistId} todolistTitle={todolist.title} />

          <UiRemoveTodolistBtn todolistId={todolistId} />
        </div>

        <UiTasksList filter={todolist.filter} todolistId={todolistId} />
      </CardContent>
      <CardActions>
        <UiFilterTasksButtons todolistId={todolistId} />
      </CardActions>
    </Card>
  );
}
