import { UiAddItemForm, useAppDispatch, useAppSelector } from '@/shared';
import { createTaskTC, selectTodolistEntityStatus } from '@/entities';

type PropsType = {
  todoListId: string;
};

export function UiAddTaskForm({ todoListId }: PropsType) {
  const entitiesStatus = useAppSelector(selectTodolistEntityStatus(todoListId));
  const dispatch = useAppDispatch();
  const addTask = (title: string) => {
    dispatch(createTaskTC({ title, todoListId }));
  };
  return <UiAddItemForm addItem={addTask} disabled={entitiesStatus === 'loading'} />;
}
