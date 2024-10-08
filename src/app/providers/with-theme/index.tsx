import { ColorContext, darkTheme, lightTheme } from '../../../shared';
import { CssBaseline, Box as MuiBox } from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import { useMemo, useState } from 'react';

import { ThemeModeType } from '../../../shared';

type WithThemeType = {
  children: React.ReactNode;
};

const UiBox = styled(MuiBox)(({ theme }) => ({
  height: '100vh',
  backgroundColor: theme.palette.background.default,
}));

export function WithTheme({ children }: WithThemeType) {
  const [mode, setMode] = useState<ThemeModeType>('light');

  const theme = useMemo(() => {
    return mode === 'light' ? lightTheme : darkTheme;
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prevMode: ThemeModeType) =>
          prevMode === 'light' ? 'dark' : 'light'
        ),
    }),
    []
  );

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <UiBox>{children}</UiBox>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}