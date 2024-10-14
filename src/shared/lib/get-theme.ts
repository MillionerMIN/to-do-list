import { darkTheme, lightTheme } from '../ui';

import { RootState } from '../redux';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export function getTheme() {
  const themeMode = useSelector((state: RootState) => state.app.themeMode);
  const theme = useMemo(() => {
    return themeMode === 'light' ? lightTheme : darkTheme;
  }, [themeMode]);
  return theme;
}
