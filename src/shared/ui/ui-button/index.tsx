import { Button } from '@mui/material';

export function UiButton({ ...props }) {
  return <Button variant='contained' color='primary' {...props} />;
}
