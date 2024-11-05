import { BaseView, ErrorPage, HomePage, LoginPage, ProtectedRoute } from '@/pages';

import { Path } from '@/shared';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseView />,
    children: [
      {
        path: Path.Login,
        element: <LoginPage />,
      },
      {
        path: '/',
        element: <ProtectedRoute />,
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
          {
            path: '*',
            element: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);
