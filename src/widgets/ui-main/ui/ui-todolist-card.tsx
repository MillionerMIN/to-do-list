import { UiEditableTitleTodolist, UiFilterTodolistButtons, UiRemoveTodolistBtn } from '@/features';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { UiTasksList } from './ui-tasks-list';
import { selectTodolistById } from '@/entities';
import { useAppSelector } from '@/shared';

type PropsType = {
  todoListId: string;
};

export function UiTodolistCard({ todoListId }: PropsType) {
  const todolist = useAppSelector(selectTodolistById(todoListId));
  return (
    <Card>
      <CardContent>
        <div className='flex justify-between'>
          <UiEditableTitleTodolist todoListId={todoListId} todolistTitle={todolist.title} />

          <UiRemoveTodolistBtn todoListId={todoListId} />
        </div>

        <UiTasksList filter={todolist.filter} todoListId={todoListId} />
      </CardContent>
      <CardActions>
        <UiFilterTodolistButtons todoListId={todoListId} />
      </CardActions>
    </Card>
  );
}
