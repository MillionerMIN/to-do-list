import './styles/App.css';

import { UiTodolist, task1, task2 } from '../shared';

function App() {
  return (
    <div className='App'>
      <UiTodolist title='What to learn' tasks={task1} date='08.08.2022' />
      <UiTodolist title='Songs' tasks={task2} />
    </div>
  );
}

export default App;
