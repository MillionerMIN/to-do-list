import { FilterTodolistType, useAppDispatch, useAppSelector } from '@/shared';
import { UiTask, fetchTasksTC, selectFilterTasksBytodoListId } from '@/entities';

import List from '@mui/material/List';
import { UiAddTaskForm } from '@/features';
import { useEffect } from 'react';

type PropsType = {
  todoListId: string;
  filter: FilterTodolistType;
};
export function UiTasksList({ todoListId, filter }: PropsType) {
  const tasks = useAppSelector(selectFilterTasksBytodoListId(todoListId, filter));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasksTC(todoListId));
  }, []);

  return (
    <>
      <UiAddTaskForm todoListId={todoListId} />
      {tasks?.length === 0 ? (
        <p>No tasks</p>
      ) : (
        <List>
          {tasks?.map((task) => {
            return <UiTask key={task.id} taskId={task.id} todoListId={todoListId} />;
          })}
        </List>
      )}
    </>
  );
}
