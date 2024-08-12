import type { FilterValues } from '../../types';
import { Task } from '../../model';
import { UiButton } from '../ui-button';

type UiTodolistProps = {
  title: string;
  tasks: Task[];
  date?: string;
  removeTask: (taskId: number) => void;
  changeFilter: (filter: FilterValues) => void;
};
export function UiTodolist({
  title,
  tasks,
  date,
  removeTask,
  changeFilter,
}: UiTodolistProps) {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <UiButton title='+' />
      </div>
      {tasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input type='checkbox' checked={task.isDone} />{' '}
              <span>{task.title}</span>
              <UiButton title='X' onClick={() => removeTask(task.id)} />
            </li>
          ))}
        </ul>
      )}

      <div>
        <UiButton title='All' onClick={() => changeFilter('all')} />
        <UiButton title='Active' onClick={() => changeFilter('active')} />
        <UiButton title='Completed' onClick={() => changeFilter('completed')} />
      </div>
      <div>{date}</div>
    </div>
  );
}
