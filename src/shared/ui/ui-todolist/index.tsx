import { ChangeEvent, KeyboardEvent, useState } from 'react';
import type { FilterValues, Task } from '../../types';

import { UiButton } from '../ui-button';

type UiTodolistProps = {
  title: string;
  tasks: Task[];
  date?: string;
  addTask: (title: string) => void;
  removeTask: (taskId: string) => void;
  changeFilter: (filter: FilterValues) => void;
};
export function UiTodolist({
  title,
  tasks,
  date,
  addTask,
  removeTask,
  changeFilter,
}: UiTodolistProps) {
  const [taskTitle, setTaskTitle] = useState<string>('');

  function addTaskHandler() {
    addTask(taskTitle);
    setTaskTitle('');
  }

  function changeTaskTitleHandler(event: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.currentTarget.value);
  }

  function addTaskOnKeyUpHandler(event: KeyboardEvent<HTMLInputElement>) {
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
          value={taskTitle}
          onChange={changeTaskTitleHandler}
          onKeyUp={addTaskOnKeyUpHandler}
        />
        <UiButton title='+' onClick={addTaskHandler} />
      </div>
      {tasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        <ul>
          {tasks.map((task) => {
            function removeTaskHandler() {
              removeTask(task.id);
            }

            return (
              <li key={task.id}>
                <input
                  type='checkbox'
                  checked={task.isDone}
                  onChange={(event) => console.log(event.currentTarget.checked)}
                />{' '}
                <span>{task.title}</span>
                <UiButton title='X' onClick={removeTaskHandler} />
              </li>
            );
          })}
        </ul>
      )}

      <div>
        <UiButton title='All' onClick={() => changeFilterHandler('all')} />
        <UiButton
          title='Active'
          onClick={() => changeFilterHandler('active')}
        />
        <UiButton
          title='Completed'
          onClick={() => changeFilterHandler('completed')}
        />
      </div>
      <div>{date}</div>
    </div>
  );
}
