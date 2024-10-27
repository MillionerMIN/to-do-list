import Alert, { AlertProps } from '@mui/material/Alert';

import clsx from 'clsx';

type PropsType = AlertProps;
export const UiAlert = ({ className, ...props }: PropsType) => {
  return <Alert className={clsx('', className)} {...props} />;
};
