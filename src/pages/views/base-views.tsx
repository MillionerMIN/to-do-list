import { UiCircularProgress, UiSnackbar, useAppDispatch, useAppSelector } from '@/shared';
import { initializeAppTC, selectIsInitialized } from '@/entities';

import { Outlet } from 'react-router-dom';
import { UiAppBar } from '@/widgets';
import { useEffect } from 'react';

export function BaseView() {
  const dispatch = useAppDispatch();
  const isInitialized = useAppSelector(selectIsInitialized);

  useEffect(() => {
    dispatch(initializeAppTC());
  }, []);

  return (
    <>
      {isInitialized && (
        <>
          <UiAppBar />
          <Outlet />
        </>
      )}
      {!isInitialized && <UiCircularProgress className='fixed top-1/3 left-1/2 full' size={150} thickness={3} />}

      <UiSnackbar />
    </>
  );
}
