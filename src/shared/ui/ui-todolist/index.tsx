import { Card, CardActions, CardContent, List, ListItem } from '@mui/material';
import type { FilterValues, Task } from '../../types';

import { ChangeEvent } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { UiAddItemForm } from '../ui-add-item-form';
import { UiButton } from '../ui-button';
import { UiCheckbox } from '../ui-checkbox';
import { UiEditableSpan } from '../ui-editable-span/ui-editable-span';
import { UiIconButton } from '../ui-icon-button';
import clsx from 'clsx';

type UiTodolistProps = {
  todolistId: string;
  title: string;
  tasks: Task[];
  date?: string;
  filter: FilterValues;
  addTask: (title: string, todolistId: string) => void;
  changeTaskStatus: (
    taskId: string,
    taskStatus: boolean,
    todolistId: string
  ) => void;
  removeTask: (taskId: string, todolistId: string) => void;
  changeFilter: (todolistId: string, filter: FilterValues) => void;
  removeTodolist: (todolistId: string) => void;
  updateTask: (taskId: string, title: string, todolistId: string) => void;
  updateTodolist: (todolistId: string, title: string) => void;
};
export function UiTodolist({
  todolistId,
  title,
  tasks,
  date,
  addTask,
  filter,
  changeTaskStatus,
  removeTask,
  changeFilter,
  removeTodolist,
  updateTask,
  updateTodolist,
}: UiTodolistProps) {
  function removeTodolistHandler() {
    removeTodolist(todolistId);
  }

  function changeFilterHandler(filter: FilterValues) {
    changeFilter(todolistId, filter);
  }

  function addItemCallback(title: string) {
    addTask(title, todolistId);
  }

  function updateTodolistTitleHandler(title: string) {
    updateTodolist(todolistId, title);
  }

  return (
    <Card>
      <CardContent>
        <div className='flex justify-between'>
          <h3 className='text-lg font-semibold'>
            <UiEditableSpan
              value={title}
              onChange={updateTodolistTitleHandler}
            />
          </h3>
          <UiIconButton
            className=' hover:text-pink'
            children={
              <DeleteIcon
                fontSize='small'
                className='text-bg-dark/50 hover:text-pink'
              />
            }
            onClick={removeTodolistHandler}
          />
        </div>

        <UiAddItemForm addItem={addItemCallback} />
        {tasks.length === 0 ? (
          <p>No tasks</p>
        ) : (
          <List>
            {tasks.map((task) => {
              function removeTaskHandler() {
                removeTask(task.id, todolistId);
              }

              function changeTaskStatusHandler(
                event: ChangeEvent<HTMLInputElement>
              ) {
                const newStatusValue = event.currentTarget.checked;
                changeTaskStatus(task.id, newStatusValue, todolistId);
              }

              function changeTaskTitleHandler(title: string) {
                updateTask(task.id, title, todolistId);
              }

              return (
                <ListItem
                  key={task.id}
                  disablePadding
                  disableGutters
                  className={clsx(
                    'justify-between',
                    task.isDone && 'opacity-30'
                  )}
                >
                  <div className='flex gap-2'>
                    <UiCheckbox
                      checked={task.isDone}
                      onChange={changeTaskStatusHandler}
                    />
                    <UiEditableSpan
                      value={task.title}
                      onChange={changeTaskTitleHandler}
                    />
                  </div>

                  <UiIconButton
                    className='hover:text-pink text-bg-dark/50'
                    onClick={removeTaskHandler}
                    children={<DeleteIcon fontSize='small' />}
                  />
                </ListItem>
              );
            })}
          </List>
        )}
      </CardContent>
      <CardActions>
        <UiButton
          variant={filter === 'all' ? 'outlined' : 'text'}
          color='inherit'
          children='All'
          onClick={() => changeFilterHandler('all')}
        />
        <UiButton
          variant={filter === 'active' ? 'outlined' : 'text'}
          color='primary'
          children='Active'
          onClick={() => changeFilterHandler('active')}
        />
        <UiButton
          variant={filter === 'completed' ? 'outlined' : 'text'}
          color='secondary'
          children='Completed'
          onClick={() => changeFilterHandler('completed')}
        />
      </CardActions>
      <div>{date}</div>
    </Card>
  );
}
