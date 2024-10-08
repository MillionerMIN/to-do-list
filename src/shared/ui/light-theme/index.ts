import { createTheme } from '@mui/material/styles';
const font = "'Public Sans', sans-serif";

export const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 576,
      sm: 768,
      md: 992,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      light: '#5BE584',
      main: '#00AB55',
      dark: '#007B55',
      contrastText: '#fff',
    },
    secondary: {
      light: '#84A9FF',
      main: '#3366FF',
      dark: '#1939B7',
      contrastText: '#fff',
    },
    info: {
      light: '#74CAFF',
      main: '#1890FF',
      dark: '#0C53B7',
      contrastText: '#fff',
    },
    success: {
      light: '#AAF27F',
      main: '#54D62C',
      dark: '#229A16',
      contrastText: '#fff',
    },
    warning: {
      light: '#FFE16A',
      main: '#FFC107',
      dark: '#B78103',
      contrastText: '#fff',
    },
    error: {
      light: '#FFA48D',
      main: '#FF4842',
      dark: '#B72136',
      contrastText: '#fff',
    },

    grey: {
      100: '#F9FAFB',
      200: '#F4F6F8',
      300: '#DFE3E8',
      400: '#C4CDD5',
      500: '#919EAB',
      600: '#637381',
      700: '#454F5B',
      800: '#212B36',
      900: '#161C24',
    },
    text: {
      primary: '#212B36',
      secondary: '#637381',
      disabled: '#919EAB',
    },
    background: {
      paper: '#f5f7fb',
      default: '#FFFFFF',
    },
    action: {
      active: '#637381',
      hover: 'rgba(145, 158, 171, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(145, 158, 171, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(145, 158, 171, 0.8)',
      disabledOpacity: 0.8,
      disabledBackground: 'rgba(145, 158, 171, 0.24)',
      focus: 'rgba(145, 158, 171, 0.24)',
      focusOpacity: 0.24,
      activatedOpacity: 0.24,
    },
  },

  shape: {
    borderRadius: 4,
  },

  typography: {
    htmlFontSize: 16,
    fontFamily: font,
    fontSize: 16,
    h1: {
      fontFamily: font,
      fontWeight: 700,
      fontSize: '4rem',
      lineHeight: 5,
    },
    h2: {
      fontFamily: font,
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 4,
    },
    h3: {
      fontFamily: font,
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 3,
    },
    h4: {
      fontFamily: font,
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: font,
      fontWeight: 600,
      fontSize: '1.375rem',
      lineHeight: 1.875,
    },
    h6: {
      fontFamily: font,
      fontWeight: 700,
      fontSize: '1.125rem',
      lineHeight: 1.75,
    },
    subtitle1: {
      fontFamily: font,
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    subtitle2: {
      fontFamily: font,
      fontWeight: 600,
      fontSize: '0.8125rem',
      lineHeight: 1.375,
    },
    body1: {
      fontFamily: font,
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: font,
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.375,
    },
    button: {
      fontFamily: font,
      fontWeight: 700,
      fontSize: '0.9375rem',
      lineHeight: 1.625,
    },
    caption: {
      fontFamily: font,
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.125,
    },
    overline: {
      fontFamily: font,
      fontWeight: 700,
      fontSize: '0.75rem',
      lineHeight: 1.125,
    },
  },
});
