import { Checkbox } from '@mui/material';
import type { CheckboxProps } from '@mui/material';
import clsx from 'clsx';

export function UiCheckbox({ className, ...props }: CheckboxProps) {
  return (
    <Checkbox
      className={clsx(
        'h-6 w-6 rounded-full  transition-all hover:scale-105 checked:border-none',
        className
      )}
      {...props}
    />
  );
}
