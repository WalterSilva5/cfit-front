import { createTheme } from '@mui/material/styles';

export const defaultThemeColors = {
  primary: '#A160EB',
  primaryDark: '#9036F7',
  primaryDarker: '#843BD8',

  secondary: '#4CBDD4',
  secondaryDark: '#22A7C2',
  secondaryDarker: '#168CA4',
  secondaryLight: '#3FE4C7',

  accent: '#4A4AFC',
  accentDark: '#2D2D8C',
  accentDarker: '#213F5B',
  accentDarkest: '#102941',
  accentDarkest2: '#0D2337',

  success: '#33D258',

  neutral1: '#B9C1C9',
  neutral2: '#7E8B98',
  neutral3: '#6A7682',
  neutralLight: '#E1E1E1',
  neutralLightest: '#F8F8F8',

  black: '#000000',
  blackSoft: '#333333',

  warning: '#FFA318',
  white: '#FFFFFF',
  alert: '#FF4500',
  danger: '#FF4555'
};

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: defaultThemeColors.primary,
      dark: defaultThemeColors.primaryDark,
      contrastText: defaultThemeColors.white
    },
    secondary: {
      main: defaultThemeColors.secondary,
      dark: defaultThemeColors.secondaryDark,
      light: defaultThemeColors.secondaryLight,
      contrastText: defaultThemeColors.white
    },
    error: {
      main: defaultThemeColors.danger,
      contrastText: defaultThemeColors.white
    },
    warning: {
      main: defaultThemeColors.warning,
      contrastText: defaultThemeColors.black
    },
    info: {
      main: defaultThemeColors.accent,
      dark: defaultThemeColors.accentDark,
      contrastText: defaultThemeColors.white
    },
    success: {
      main: defaultThemeColors.success,
      contrastText: defaultThemeColors.white
    },
    background: {
      default: defaultThemeColors.neutralLightest,
      paper: defaultThemeColors.neutralLight
    },
    text: {
      primary: defaultThemeColors.blackSoft,
      secondary: defaultThemeColors.neutral2,
      disabled: defaultThemeColors.neutral3
    }
  }
});

export const darkThemeColors = {
  primary: '#A160EB',
  secondary: '#4CBDD4',

  background: '#121212',
  surface: '#1E1E1E',

  error: '#FF5252',
  warning: '#FFA318',
  info: '#2196F3',
  success: '#4CAF50',

  textPrimary: '#FFFFFF',
  textSecondary: '#B0B0B0',
  textHint: '#7A7A7A',

  border: '#2C2C2C'
};

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: darkThemeColors.primary,
      contrastText: darkThemeColors.textPrimary
    },
    secondary: {
      main: darkThemeColors.secondary,
      contrastText: darkThemeColors.textPrimary
    },
    error: {
      main: darkThemeColors.error,
      contrastText: darkThemeColors.textPrimary
    },
    warning: {
      main: darkThemeColors.warning,
      contrastText: darkThemeColors.textPrimary
    },
    info: {
      main: darkThemeColors.info,
      contrastText: darkThemeColors.textPrimary
    },
    success: {
      main: darkThemeColors.success,
      contrastText: darkThemeColors.textPrimary
    },
    background: {
      default: darkThemeColors.background,
      paper: darkThemeColors.surface
    },
    text: {
      primary: darkThemeColors.textPrimary,
      secondary: darkThemeColors.textSecondary,
      disabled: darkThemeColors.textHint
    },
    divider: darkThemeColors.border
  }
});

export default defaultTheme;
