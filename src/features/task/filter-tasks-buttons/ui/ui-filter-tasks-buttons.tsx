import {
  FilterValuesType,
  UiButton,
  useAppDispatch,
  useAppSelector,
} from '../../../../shared';
import {
  changedTodolistFilterAC,
  selectFilterTodolistById,
} from '../../../../entities';

type PropsType = {
  todolistId: string;
};
export function UiFilterTasksButtons({ todolistId }: PropsType) {
  const { filter } = useAppSelector(selectFilterTodolistById(todolistId));
  const dispatch = useAppDispatch();

  const changeFilterHandler = (filter: FilterValuesType) => {
    dispatch(changedTodolistFilterAC({ todolistId, filter }));
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
