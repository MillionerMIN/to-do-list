import './styles.css';

import type { ChangeEvent, KeyboardEvent } from 'react';

import { UiButton } from '../ui-button';
import { UiField } from '../ui-field';
import { useState } from 'react';

type UiAddItemFormProps = {
  addTask: (title: string) => void;
};

export function UiAddItemForm({ addTask }: UiAddItemFormProps) {
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

  return (
    <div className='todolist-title-container'>
      <UiField
        className={error ? 'error' : ''}
        value={taskTitle}
        onChange={changeTaskTitleHandler}
        onKeyUp={addTaskOnKeyUpHandler}
      />
      <UiButton title='+' onClick={addTaskHandler} />
      {/* <UiButton title='x' onClick={removeTodolistHandler} /> */}
    </div>
  );
}
