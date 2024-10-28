import type { ChangeEvent, KeyboardEvent } from 'react';

import AddBoxIcon from '@mui/icons-material/AddBox';
import { UiField } from '../ui-field';
import { UiIconButton } from '../ui-icon-button';
import { useState } from 'react';

type PropsType = {
  addItem: (title: string) => void;
  disabled?: boolean;
};

export function UiAddItemForm({ addItem, disabled }: PropsType) {
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
    if (event.key === 'Enter') addItemHandler();
  }

  return (
    <div className='flex items-start gap-2'>
      <UiField
        className={error ? 'outline-none outline-2 -outline-offset-2 outline-ping/25' : ''}
        value={taskTitle}
        onChange={changeItemTitleHandler}
        onKeyUp={addItemOnKeyUpHandler}
        error={!!error}
        helperText={error}
        disabled={disabled}
      />
      <UiIconButton children={<AddBoxIcon />} onClick={addItemHandler} disabled={disabled} />
    </div>
  );
}
