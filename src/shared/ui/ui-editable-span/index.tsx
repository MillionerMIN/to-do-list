import { ChangeEvent, useState } from 'react';

import { UiField } from '../ui-field';
import clsx from 'clsx';

type Props = {
  className?: string;
  value: string;
  disabled?: boolean;
  onChange: (newTitle: string) => void;
};
export const UiEditableSpan = ({ className, value, disabled, onChange }: Props) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(value);
  console.log(disabled);
  const activateEditModeHandler = () => {
    if (disabled) setEditMode(false);
    else setEditMode(true);
  };

  const deactivateEditModeHandler = () => {
    setEditMode(false);
    onChange(title);
  };

  const changeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  return (
    <>
      {editMode ? (
        <UiField
          value={title}
          onChange={changeTitleHandler}
          autoFocus
          onBlur={deactivateEditModeHandler}
          disabled={disabled}
        />
      ) : (
        <span className={clsx('', className)} onDoubleClick={activateEditModeHandler}>
          {value}
        </span>
      )}
    </>
  );
};
