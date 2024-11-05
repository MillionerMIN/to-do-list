import { Navigate } from 'react-router-dom';
import { UiButton } from '@/shared';

const s = {
  container: 'flex items-center justify-center min-h-screen',
  wrapper: 'flex flex-col items-center',
  subTitle: 'text-3xl font-bold uppercase',
};

export const ErrorPage = () => {
  const handleStartPage = () => {
    return <Navigate to={'/'} />;
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h1 className='text-6xl font-bold'>404</h1>
        <h2 className={s.subTitle}>Page not found</h2>
        <p className='text-2xl'>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        {/* <UiButton onClick={handleStartPage}>Back</UiButton> */}
      </div>
    </div>
  );
};
