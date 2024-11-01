import { WithRedux, WithTheme } from './providers';

import { RouterProvider } from 'react-router-dom';
import { initializeAppTC } from '@/entities';
import { router } from './router';
import { useAppDispatch } from '@/shared';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeAppTC());
  }, []);

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
