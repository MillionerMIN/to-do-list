import { WithRedux, WithTheme } from './providers';

import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function App() {
  console.log('$c Render');

  return (
    <WithTheme>
      <RouterProvider router={router} />
    </WithTheme>
  );
}

export function AppWithRedux() {
  return <WithRedux children={<App />} />;
}
