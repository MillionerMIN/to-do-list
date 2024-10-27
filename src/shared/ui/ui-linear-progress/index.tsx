import LinearProgress from '@mui/material/LinearProgress';
import type { LinearProgressProps } from '@mui/material';
import clsx from 'clsx';

type PropsType = LinearProgressProps;

export const UiLinearProgress = ({ className, ...props }: PropsType) => {
  return <LinearProgress className={clsx('', className)} {...props} />;
};
