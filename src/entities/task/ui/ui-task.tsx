import { TaskStatus, UiCheckbox, UiEditableSpan, UiIconButton, useAppDispatch, useAppSelector } from '@/shared';
import { changeTaskTitleTC, removeTaskTC, selectTaskByTaskId } from '../model';

import { ChangeEvent } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import { changeTaskStatusTC } from '../model/tasks-reducer/thunks/change-task-status-TC';
import clsx from 'clsx';
import { selectTodolistEntityStatusById } from '@/entities';

type PropsType = {
  todoListId: string;
  taskId: string;
};
export function UiTask({ todoListId, taskId }: PropsType) {
  const entitiesStatus = useAppSelector(selectTodolistEntityStatusById(todoListId));
  const task = useAppSelector(selectTaskByTaskId(todoListId, taskId));
  const dispatch = useAppDispatch();
  function removeTaskHandler() {
    dispatch(removeTaskTC({ taskId, todoListId }));
  }

  function changeTaskStatusHandler(event: ChangeEvent<HTMLInputElement>) {
    const status = event.currentTarget.checked ? TaskStatus.Completed : TaskStatus.New;
    dispatch(
      changeTaskStatusTC({
        todoListId,
        taskId,
        status,
      })
    );
  }

  function changeTaskTitleHandler(title: string) {
    dispatch(changeTaskTitleTC({ title, taskId, todoListId }));
  }

  return (
    <ListItem
      key={task.id}
      disablePadding
      disableGutters
      className={clsx('justify-between', !!task.status && 'opacity-30')}
    >
      <div className='flex gap-2'>
        <UiCheckbox
          checked={!!task.status}
          onChange={changeTaskStatusHandler}
          disabled={entitiesStatus === 'loading'}
        />
        <UiEditableSpan value={task.title} onChange={changeTaskTitleHandler} disabled={entitiesStatus === 'loading'} />
      </div>

      <UiIconButton
        className='hover:text-pink text-bg-dark/50'
        onClick={removeTaskHandler}
        children={<DeleteIcon fontSize='small' />}
        disabled={entitiesStatus === 'loading'}
      />
    </ListItem>
  );
}
