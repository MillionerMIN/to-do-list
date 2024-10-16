import { TodolistType, useAppSelector } from '../../../shared';
import {
  UiEditableTitleTodolist,
  UiFilterTasksButtons,
  UiRemoveTodolistBtn,
} from '../../../features';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { UiTasksList } from './ui-tasks-list';

type PropsType = {
  todolistId: string;
};

export function UiTodolistCard({ todolistId }: PropsType) {
  const todolist = useAppSelector(
    (state) =>
      state.todolists.find((tl) => tl.id === todolistId) as TodolistType
  );
  return (
    <Card>
      <CardContent>
        <div className='flex justify-between'>
          <UiEditableTitleTodolist
            todolistId={todolistId}
            todolistTitle={todolist.title}
          />

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
