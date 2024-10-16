import {
  TaskType,
  UiEditableSpan,
  useAppDispatch,
  useAppSelector,
} from '../../../shared';
import { changeTaskStatusAC, changeTaskTitleAC, removeTaskAC } from '../model';

import { ChangeEvent } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import { UiCheckbox } from '../../../shared';
import { UiIconButton } from '../../../shared/ui/ui-icon-button';
import clsx from 'clsx';

type PropsType = {
  todolistId: string;
  taskId: string;
};
export function UiTask({ todolistId, taskId }: PropsType) {
  const task = useAppSelector(
    (state) => state.tasks[todolistId].find((t) => t.id === taskId) as TaskType
  );
  const dispatch = useAppDispatch();
  function removeTaskHandler() {
    dispatch(removeTaskAC({ taskId, todolistId }));
  }

  function changeTaskStatusHandler(event: ChangeEvent<HTMLInputElement>) {
    const newStatusValue = event.currentTarget.checked;
    dispatch(
      changeTaskStatusAC({
        taskId,
        isDone: newStatusValue,
        todolistId,
      })
    );
  }

  function changeTaskTitleHandler(title: string) {
    dispatch(changeTaskTitleAC({ taskId, title, todolistId }));
  }

  return (
    <ListItem
      key={task.id}
      disablePadding
      disableGutters
      className={clsx('justify-between', task.isDone && 'opacity-30')}
    >
      <div className='flex gap-2'>
        <UiCheckbox checked={task.isDone} onChange={changeTaskStatusHandler} />
        <UiEditableSpan value={task.title} onChange={changeTaskTitleHandler} />
      </div>

      <UiIconButton
        className='hover:text-pink text-bg-dark/50'
        onClick={removeTaskHandler}
        children={<DeleteIcon fontSize='small' />}
      />
    </ListItem>
  );
}
