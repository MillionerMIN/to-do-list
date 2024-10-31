import { BaseView, ErrorPage, HomePage, LoginPage } from '@/pages';

import { Path } from '@/shared';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseView />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: Path.Login,
        element: <LoginPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);
