import { UiEditableSpan, useAppDispatch, useAppSelector } from '@/shared';
import { selectTodolistEntityStatusById, updateTodolistTitleTC } from '@/entities';

type PropsType = {
  todoListId: string;
  todolistTitle: string;
};
export function UiEditableTitleTodolist({ todoListId, todolistTitle }: PropsType) {
  const entitiesStatus = useAppSelector(selectTodolistEntityStatusById(todoListId));
  const dispatch = useAppDispatch();
  function updateTodolistTitleHandler(title: string) {
    dispatch(updateTodolistTitleTC({ id: todoListId, title }));
  }
  return (
    <h3 className='text-lg font-semibold'>
      <UiEditableSpan
        value={todolistTitle}
        onChange={updateTodolistTitleHandler}
        disabled={entitiesStatus === 'loading'}
      />
    </h3>
  );
}
