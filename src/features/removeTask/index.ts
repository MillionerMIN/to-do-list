import { Task } from '../../shared';

export function removeTask(arrayTasks: Task[], taskId: number) {
  const filteredTasks = arrayTasks.filter((task) => task.id !== taskId);

  return filteredTasks;
}
