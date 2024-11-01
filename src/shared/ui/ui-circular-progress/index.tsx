import { Box, type CircularProgressProps } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import clsx from 'clsx';

type PropsType = CircularProgressProps;

export const UiCircularProgress = ({ className, ...props }: PropsType) => {
  return (
    <Box className='flex'>
      <CircularProgress className={clsx('', className)} {...props} />
    </Box>
  );
};
