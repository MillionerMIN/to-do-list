import { UiAddItemForm, useAppDispatch } from '@/shared';

import { createTaskTC } from '@/entities';

type PropsType = {
  todoListId: string;
};

export function UiAddTaskForm({ todoListId }: PropsType) {
  const dispatch = useAppDispatch();
  const addTask = (title: string) => {
    dispatch(createTaskTC({ title, todoListId }));
  };
  return <UiAddItemForm addItem={addTask} />;
}
