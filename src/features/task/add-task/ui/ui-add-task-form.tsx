import { UiAddItemForm, useAppDispatch } from '../../../../shared';

import { addTaskAC } from '../../../../entities';

type PropsType = {
  todolistId: string;
};

export function UiAddTaskForm({ todolistId }: PropsType) {
  const dispatch = useAppDispatch();
  const addTask = (title: string) => {
    dispatch(addTaskAC({ title, todolistId }));
  };
  return <UiAddItemForm addItem={addTask} />;
}
