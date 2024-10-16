import { UiIconButton, useAppDispatch } from '../../../../shared';

import DeleteIcon from '@mui/icons-material/Delete';
import { removeTodolistAC } from '../../../../entities';

type PropsType = {
  todolistId: string;
};
export function UiRemoveTodolistBtn({ todolistId }: PropsType) {
  const dispatch = useAppDispatch();
  const removeTodolistHandler = () => {
    dispatch(removeTodolistAC(todolistId));
  };
  return (
    <UiIconButton
      className=' hover:text-pink'
      children={
        <DeleteIcon
          fontSize='small'
          className='text-bg-dark/50 hover:text-pink'
        />
      }
      onClick={removeTodolistHandler}
    />
  );
}
