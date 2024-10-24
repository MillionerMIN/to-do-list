import { CssBaseline, Box as MuiBox } from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';

import { useGetTheme } from '@/shared';

type WithThemeType = {
  children: React.ReactNode;
};

const UiBox = styled(MuiBox)(({ theme }) => ({
  height: '100vh',
  backgroundColor: theme.palette.background.default,
}));

export function WithTheme({ children }: WithThemeType) {
  const theme = useGetTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <UiBox>{children}</UiBox>
    </ThemeProvider>
  );
}
