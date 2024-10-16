import { useAppSelector, type FilterValuesType } from '../../../shared';

import List from '@mui/material/List';

import { UiAddTaskForm } from '../../../features';
import { selectFilterTasksByTodolistId, UiTask } from '../../../entities';

type PropsType = {
  todolistId: string;
  filter: FilterValuesType;
};
export function UiTasksList({ todolistId, filter }: PropsType) {
  const tasks = useAppSelector(
    selectFilterTasksByTodolistId(todolistId, filter)
  );

  return (
    <>
      <UiAddTaskForm todolistId={todolistId} />
      {tasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        <List>
          {tasks.map((task) => {
            return (
              <UiTask key={task.id} taskId={task.id} todolistId={todolistId} />
            );
          })}
        </List>
      )}
    </>
  );
}
