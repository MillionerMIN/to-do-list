import { UiButton, useAppDispatch, useAppSelector } from '@/shared';
import { logOutTC, selectIsLoggedIn } from '@/entities';

export function UiLogOutButton() {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logOutTC());
  };
  return (
    <>{isLoggedIn && <UiButton variant='outlined' color='inherit' children='Log out' onClick={handleLogOut} />} </>
  );
}
