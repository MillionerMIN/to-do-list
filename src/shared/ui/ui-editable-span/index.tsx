import { ChangeEvent, useState } from 'react';

import { UiField } from '../ui-field';

type PropsType = {
  value: string;
  onChange: (newTitle: string) => void;
};
const UiEditableSpan = ({ value, onChange }: PropsType) => {
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
        <span onDoubleClick={activateEditModeHandler}>{value}</span>
      )}
    </>
  );
};

export { UiEditableSpan };
