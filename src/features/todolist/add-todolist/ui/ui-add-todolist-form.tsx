import { UiAddItemForm, useAppDispatch } from '@/shared';

import { addTodolistAC } from '@/entities';

export function UiAddTodolistForm() {
  const dispatch = useAppDispatch();
  const addTodolist = (title: string) => {
    dispatch(addTodolistAC(title));
  };
  return <UiAddItemForm addItem={addTodolist} />;
}
