import { forwardRef, memo } from 'react';

import { TextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material';
import { clsx } from 'clsx';

type PropsType = Omit<TextFieldProps, 'variant'>;
// eslint-disable-next-line react/display-name
export const UiField = memo(
  forwardRef(({ className, ...props }: PropsType, ref) => (
    <TextField
      className={clsx('', className)}
      size='small'
      fullWidth
      {...props}
      inputRef={ref}
    />
  ))
);
