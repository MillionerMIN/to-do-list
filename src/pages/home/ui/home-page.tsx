import { Navigate } from 'react-router-dom';
import { UiMain } from '@/widgets';
import { selectIsLoggedIn } from '@/entities';
import { useAppSelector } from '@/shared';

export function HomePage() {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={'/login'} />;
  }
  return <UiMain />;
}
