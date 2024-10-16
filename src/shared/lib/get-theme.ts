import { darkTheme, lightTheme } from '../ui';

import { useAppSelector } from '../hooks';
import { useMemo } from 'react';

export function getTheme() {
  const themeMode = useAppSelector((state) => state.app.themeMode);
  const theme = useMemo(() => {
    return themeMode === 'light' ? lightTheme : darkTheme;
  }, [themeMode]);
  return theme;
}
