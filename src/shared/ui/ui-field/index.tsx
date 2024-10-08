import { forwardRef, memo } from 'react';

import { TextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material';
import { clsx } from 'clsx';

type InputType = Omit<TextFieldProps, 'variant'>;
// eslint-disable-next-line react/display-name
export const UiField = memo(
  forwardRef(({ className, ...props }: InputType, ref) => (
    <TextField
      className={clsx('', className)}
      size='small'
      fullWidth
      {...props}
      inputRef={ref}
    />
  ))
);
