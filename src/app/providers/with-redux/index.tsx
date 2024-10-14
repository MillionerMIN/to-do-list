import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { store } from '../../../shared';

type PropsType = {
  children: ReactNode;
};

export function WithRedux({ children }: PropsType) {
  return <Provider store={store}>{children}</Provider>;
}
