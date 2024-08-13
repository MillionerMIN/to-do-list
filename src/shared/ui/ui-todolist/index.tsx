import './styles.css';

import { ChangeEvent, KeyboardEvent, useState } from 'react';
import type { FilterValues, Task } from '../../types';

import { UiButton } from '../ui-button';

type UiTodolistProps = {
  title: string;
  tasks: Task[];
  date?: string;
  filter: FilterValues;
  addTask: (title: string) => void;
  changeTaskStatus: (taskId: string, taskStatus: boolean) => void;
  removeTask: (taskId: string) => void;
  changeFilter: (filter: FilterValues) => void;
};
export function UiTodolist({
  title,
  tasks,
  date,
  addTask,
  filter,
  changeTaskStatus,
  removeTask,
  changeFilter,
}: UiTodolistProps) {
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  function addTaskHandler() {
    if (taskTitle.trim() !== '') {
      addTask(taskTitle.trim());
      setTaskTitle('');
    } else {
      setError('title is required');
    }
  }

  function changeTaskTitleHandler(event: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.currentTarget.value);
  }

  function addTaskOnKeyUpHandler(event: KeyboardEvent<HTMLInputElement>) {
    setError(null);
    event.key === 'Enter' && addTaskHandler();
  }

  function changeFilterHandler(filter: FilterValues) {
    changeFilter(filter);
  }

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input
          className={error ? 'error' : ''}
          value={taskTitle}
          onChange={changeTaskTitleHandler}
          onKeyUp={addTaskOnKeyUpHandler}
        />
        <UiButton title='+' onClick={addTaskHandler} />
      </div>
      {error && <p className='error-message'>{error}</p>}
      {tasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        <ul>
          {tasks.map((task) => {
            function removeTaskHandler() {
              removeTask(task.id);
            }

            function changeTaskStatusHandler(
              event: ChangeEvent<HTMLInputElement>
            ) {
              const newStatusValue = event.currentTarget.checked;
              changeTaskStatus(task.id, newStatusValue);
            }

            return (
              <li key={task.id} className={task.isDone ? 'is-done' : ''}>
                <input
                  type='checkbox'
                  checked={task.isDone}
                  onChange={changeTaskStatusHandler}
                />{' '}
                <span>{task.title}</span>
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
