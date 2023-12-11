import { createTheme } from '@mui/material/styles';

export const defaultThemeColors = {
  primary: '#4CAF50', 
  primaryDark: '#388E3C',
  primaryDarker: '#1B5E20',

  secondary: '#81C784',
  secondaryDark: '#66BB6A',
  secondaryDarker: '#388E3C',
  secondaryLight: '#A5D6A7',

  accent: '#8BC34A',
  accentDark: '#558B2F',
  accentDarker: '#33691E',
  accentDarkest: '#1B5E20',
  accentDarkest2: '#1B5E20',

  success: '#4CAF50',

  neutral1: '#B9C1C9',
  neutral2: '#7E8B98',
  neutral3: '#6A7682',
  neutralLight: '#E1E1E1',
  neutralLightest: '#F8F8F8',

  black: '#000000',
  blackSoft: '#333333',

  warning: '#FFEB3B',
  white: '#FFFFFF',
  alert: '#FFC107',
  danger: '#FF5252'
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
      dark: defaultThemeColors.secondaryDarker,
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
