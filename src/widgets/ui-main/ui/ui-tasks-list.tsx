import { FilterTodolistType, useAppSelector } from '@/shared';
import { UiTask, selectFilterTasksByTodolistId } from '@/entities';

import List from '@mui/material/List';
import { UiAddTaskForm } from '@/features';

type PropsType = {
  todolistId: string;
  filter: FilterTodolistType;
};
export function UiTasksList({ todolistId, filter }: PropsType) {
  const tasks = useAppSelector(selectFilterTasksByTodolistId(todolistId, filter));

  return (
    <>
      <UiAddTaskForm todolistId={todolistId} />
      {tasks?.length === 0 ? (
        <p>No tasks</p>
      ) : (
        <List>
          {tasks?.map((task) => {
            return <UiTask key={task.id} taskId={task.id} todolistId={todolistId} />;
          })}
        </List>
      )}
    </>
  );
}
