import { UiIconButton, useAppDispatch } from '@/shared';

import DeleteIcon from '@mui/icons-material/Delete';
import { removeTodolistAC } from '@/entities';

type PropsType = {
  todoListId: string;
};
export function UiRemoveTodolistBtn({ todoListId }: PropsType) {
  const dispatch = useAppDispatch();
  const removeTodolistHandler = () => {
    dispatch(removeTodolistAC(todoListId));
  };
  return (
    <UiIconButton
      className=' hover:text-pink'
      children={<DeleteIcon fontSize='small' className='text-bg-dark/50 hover:text-pink' />}
      onClick={removeTodolistHandler}
    />
  );
}
