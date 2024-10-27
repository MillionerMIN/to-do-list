import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';

import Alert from '@mui/material/Alert';
import { selectAppError } from '@/shared/model/app-reducer/app-selectors';
import { setAppErrorAC } from '@/shared/model';

export function UiSnackbar() {
  const error = useAppSelector(selectAppError);
  const dispatch = useAppDispatch();

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(setAppErrorAC(null));
  };

  return (
    <Snackbar
      open={error !== null}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert className='w-full' onClose={handleClose} severity='error' variant='filled'>
        {error}
      </Alert>
    </Snackbar>
  );
}
