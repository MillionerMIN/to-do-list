import './styles/App.css';

import { UiTodolist } from '../shared';

function App() {
  return (
    <div className='App'>
      <UiTodolist title='What to learn' />
      <UiTodolist title='Songs' />
      <UiTodolist title='Books' />
    </div>
  );
}

export default App;
