import { UiEditableSpan, useAppDispatch } from '@/shared';

import { updateTodolistTitleTC } from '@/entities';

type PropsType = {
  todoListId: string;
  todolistTitle: string;
};
export function UiEditableTitleTodolist({ todoListId, todolistTitle }: PropsType) {
  const dispatch = useAppDispatch();
  function updateTodolistTitleHandler(title: string) {
    dispatch(updateTodolistTitleTC({ id: todoListId, title }));
  }
  return (
    <h3 className='text-lg font-semibold'>
      <UiEditableSpan value={todolistTitle} onChange={updateTodolistTitleHandler} />
    </h3>
  );
}
