import { FilterTodolistType, UiButton, useAppDispatch, useAppSelector } from '@/shared';
import { changeTodolistFilterAC, selectFilterTodolistById } from '@/entities';

type PropsType = {
  todoListId: string;
};
export function UiFilterTodolistButtons({ todoListId }: PropsType) {
  const { filter } = useAppSelector(selectFilterTodolistById(todoListId));
  const dispatch = useAppDispatch();

  const changeFilterHandler = (filter: FilterTodolistType) => {
    dispatch(changeTodolistFilterAC({ todoListId, filter }));
  };
  return (
    <>
      <UiButton
        variant={filter === 'all' ? 'outlined' : 'text'}
        color='inherit'
        children='All'
        onClick={() => changeFilterHandler('all')}
      />
      <UiButton
        variant={filter === 'active' ? 'outlined' : 'text'}
        color='primary'
        children='Active'
        onClick={() => changeFilterHandler('active')}
      />
      <UiButton
        variant={filter === 'completed' ? 'outlined' : 'text'}
        color='secondary'
        children='Completed'
        onClick={() => changeFilterHandler('completed')}
      />
    </>
  );
}
