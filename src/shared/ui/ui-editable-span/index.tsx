import { ChangeEvent, useState } from 'react';

import { UiField } from '../ui-field';
import clsx from 'clsx';

type Props = {
  className?: string;
  value: string;
  onChange: (newTitle: string) => void;
};
export const UiEditableSpan = ({ className, value, onChange }: Props) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(value);

  const activateEditModeHandler = () => {
    setEditMode(true);
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
        />
      ) : (
        <span
          className={clsx('', className)}
          onDoubleClick={activateEditModeHandler}
        >
          {value}
        </span>
      )}
    </>
  );
};
