import { Task } from '../../model';

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
        <button>+</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type='checkbox' checked={task.isDone} />{' '}
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div>{date}</div>
    </div>
  );
}
