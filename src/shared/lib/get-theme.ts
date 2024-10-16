import { darkTheme, lightTheme } from '../ui';

import { selectThemeMode } from '../model';
import { useAppSelector } from '../hooks';
import { useMemo } from 'react';

export function getTheme() {
  const themeMode = useAppSelector(selectThemeMode);
  const theme = useMemo(() => {
    return themeMode === 'light' ? lightTheme : darkTheme;
  }, [themeMode]);
  return theme;
}
