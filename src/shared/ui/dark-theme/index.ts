import { createTheme } from '@mui/material/styles';

const font = "'Public Sans', sans-serif";

export const darkTheme = createTheme({
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
    mode: 'dark',
    primary: {
      light: '#eefdb1',
      main: '#C8F904',
      dark: '#96bb03',
      contrastText: '#0E1A1F',
    },
    secondary: {
      light: '#E9EBF8',
      main: '#6967FB',
      dark: '#4F4DBC',
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
      light: '#FFBECA',
      main: '#FF2D55',
      dark: '#BF2240',
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
      primary: '#FFFFFF',
      secondary: '#919EAB',
      disabled: '#637381',
    },
    background: {
      paper: '#212B36',
      default: '#161C24',
    },
    action: {
      active: '#919EAB',
      hover: 'rgba(145, 158, 171, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(145, 158, 171, 0.16)',
      selectedOpacity: 0.08,
      disabled: 'rgba(145, 158, 171, 0.8)',
      disabledOpacity: 0.48,
      disabledBackground: 'rgba(145, 158, 171, 0.24)',
      focus: 'rgba(145, 158, 171, 0.24)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
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
