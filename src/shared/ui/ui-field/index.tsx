import type { InputHTMLAttributes } from 'react';

type UiFieldProps = {} & InputHTMLAttributes<HTMLInputElement>;
export function UiField({ ...props }: UiFieldProps) {
  return <input {...props} />;
}
