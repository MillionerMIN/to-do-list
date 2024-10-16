import { useAppSelector, type FilterValuesType } from '../../../shared';

import List from '@mui/material/List';

import { UiAddTaskForm } from '../../../features';
import { UiTask } from '../../../entities';

type PropsType = {
  todolistId: string;
  filter: FilterValuesType;
};
export function UiTasksList({ todolistId, filter }: PropsType) {
  const tasks = useAppSelector((state) => {
    if (filter === 'active')
      return state.tasks[todolistId].filter((task) => !task.isDone);

    if (filter === 'completed')
      return state.tasks[todolistId].filter((task) => task.isDone);
    return state.tasks[todolistId];
  });

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
