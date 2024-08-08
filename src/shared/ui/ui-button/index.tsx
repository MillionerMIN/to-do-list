import { ButtonHTMLAttributes } from 'react';

type UiButtonProps = {
  title: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function UiButton({ title, ...props }: UiButtonProps) {
  return <button {...props}>{title}</button>;
}
