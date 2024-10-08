import { IconButton } from '@mui/material';
import type { IconButtonProps } from '@mui/material';
import clsx from 'clsx';

export function UiIconButton({ className, ...props }: IconButtonProps) {
  return (
    <IconButton color='primary' className={clsx('', className)} {...props} />
  );
}
