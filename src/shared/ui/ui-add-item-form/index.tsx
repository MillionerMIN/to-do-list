import './styles.css';

import type { ChangeEvent, KeyboardEvent } from 'react';

import { UiButton } from '../ui-button';
import { UiField } from '../ui-field';
import { useState } from 'react';

type UiAddItemFormProps = {
  addItem: (title: string) => void;
};

export function UiAddItemForm({ addItem }: UiAddItemFormProps) {
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  function addItemHandler() {
    if (taskTitle.trim() !== '') {
      addItem(taskTitle.trim());
      setTaskTitle('');
    } else {
      setError('title is required');
    }
  }

  function changeItemTitleHandler(event: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.currentTarget.value);
  }

  function addItemOnKeyUpHandler(event: KeyboardEvent<HTMLInputElement>) {
    setError(null);
    event.key === 'Enter' && addItemHandler();
  }

  return (
    <div className='todolist-title-container'>
      <UiField
        className={error ? 'error' : ''}
        value={taskTitle}
        onChange={changeItemTitleHandler}
        onKeyUp={addItemOnKeyUpHandler}
      />
      <UiButton title='+' onClick={addItemHandler} />
      {error && <div className='error-message'>{error}</div>}
    </div>
  );
}
