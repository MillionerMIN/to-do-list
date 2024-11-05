import { Navigate, Outlet } from 'react-router-dom';
import { Path, useAppSelector } from '@/shared';

import { selectIsLoggedIn } from '@/entities';

export function ProtectedRoute() {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to={Path.Login} />;
  }

  return <Outlet />;
}
