import { UiEditableSpan, useAppDispatch } from '../../../../shared';

import { changedTodolistTitleAC } from '../../../../entities';

type PropsType = {
  todolistId: string;
  todolistTitle: string;
};
export function UiEditableTitleTodolist({
  todolistId,
  todolistTitle,
}: PropsType) {
  const dispatch = useAppDispatch();
  function updateTodolistTitleHandler(title: string) {
    dispatch(changedTodolistTitleAC({ todolistId, title }));
  }
  return (
    <h3 className='text-lg font-semibold'>
      <UiEditableSpan
        value={todolistTitle}
        onChange={updateTodolistTitleHandler}
      />
    </h3>
  );
}
