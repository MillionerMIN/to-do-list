import { Outlet } from 'react-router-dom';
import { UiAppBar } from '@/widgets';
import { UiSnackbar } from '@/shared';

export function BaseView() {
  return (
    <>
      <UiAppBar />
      <Outlet />
      <UiSnackbar />
    </>
  );
}
