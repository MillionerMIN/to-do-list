import './styles.css';

import type { FilterValues, Task } from '../../types';

import { ChangeEvent } from 'react';
import { UiAddItemForm } from '../ui-add-item-form';
import { UiButton } from '../ui-button';
import { UiEditableSpan } from '../ui-editable-span';

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
    <div>
      <h3>
        <UiEditableSpan value={title} onChange={updateTodolistTitleHandler} />
      </h3>
      <UiButton title='x' onClick={removeTodolistHandler} />
      <UiAddItemForm addItem={addItemCallback} />
      {tasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        <ul>
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
              <li key={task.id} className={task.isDone ? 'is-done' : ''}>
                <input
                  type='checkbox'
                  checked={task.isDone}
                  onChange={changeTaskStatusHandler}
                />
                <UiEditableSpan
                  value={task.title}
                  onChange={changeTaskTitleHandler}
                />
                <UiButton title='X' onClick={removeTaskHandler} />
              </li>
            );
          })}
        </ul>
      )}
      <div>
        <UiButton
          className={filter === 'all' ? 'filter-active' : ''}
          title='All'
          onClick={() => changeFilterHandler('all')}
        />
        <UiButton
          className={filter === 'active' ? 'filter-active' : ''}
          title='Active'
          onClick={() => changeFilterHandler('active')}
        />
        <UiButton
          className={filter === 'completed' ? 'filter-active' : ''}
          title='Completed'
          onClick={() => changeFilterHandler('completed')}
        />
      </div>
      <div>{date}</div>
    </div>
  );
}
