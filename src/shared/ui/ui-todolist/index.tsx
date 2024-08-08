import { Task } from '../../model';
import { UiButton } from '../ui-button';

type UiTodolistProps = {
  title: string;
  tasks: Task[];
  date?: string;
};
export function UiTodolist({ title, tasks, date }: UiTodolistProps) {
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
            </li>
          ))}
        </ul>
      )}

      <div>
        <UiButton title='All' />
        <UiButton title='Active' />
        <UiButton title='Completed' />
      </div>
      <div>{date}</div>
    </div>
  );
}
