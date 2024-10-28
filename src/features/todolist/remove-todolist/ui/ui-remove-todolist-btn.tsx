import { UiIconButton, useAppDispatch, useAppSelector } from '@/shared';
import { removeTodolistTC, selectTodolistById } from '@/entities';

import DeleteIcon from '@mui/icons-material/Delete';

type PropsType = {
  todoListId: string;
};
export function UiRemoveTodolistBtn({ todoListId }: PropsType) {
  const { entityStatus } = useAppSelector(selectTodolistById(todoListId));
  const dispatch = useAppDispatch();
  const removeTodolistHandler = () => {
    dispatch(removeTodolistTC({ id: todoListId }));
  };
  return (
    <UiIconButton
      className=' hover:text-pink'
      children={<DeleteIcon fontSize='small' className='text-bg-dark/50 hover:text-pink' />}
      onClick={removeTodolistHandler}
      disabled={entityStatus === 'loading'}
    />
  );
}
