import { darkTheme, lightTheme } from '../ui';

import { selectThemeMode } from '../model';
import { useAppSelector } from '.';
import { useMemo } from 'react';

export function useGetTheme() {
  const themeMode = useAppSelector(selectThemeMode);
  const theme = useMemo(() => {
    return themeMode === 'light' ? lightTheme : darkTheme;
  }, [themeMode]);
  return theme;
}
