import { UiAddItemForm, useAppDispatch } from '@/shared';

import { addTodolistTC } from '@/entities';

export function UiAddTodolistForm() {
  const dispatch = useAppDispatch();
  const addTodolist = (title: string) => {
    dispatch(addTodolistTC({ title }));
  };
  return <UiAddItemForm addItem={addTodolist} />;
}
