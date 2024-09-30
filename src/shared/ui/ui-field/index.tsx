import type { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

type UiFieldProps = {} & InputHTMLAttributes<HTMLInputElement>;
export function UiField({ className, ...props }: UiFieldProps) {
  return (
    <input className={clsx('border border-spacing-1', className)} {...props} />
  );
}
