import { createMuiTheme } from '@material-ui/core/styles';

const commonTheme = {
  palette: {
    primary: {
      fontColor1: '#bbe1fa',
      fontColor2: '#e5b9a2',
    },
  },
};

export const darkTheme = createMuiTheme({
  ...commonTheme,
  palette: {
    ...commonTheme.palette,
    primary: {
      ...commonTheme.palette.primary,
      main: '#121212',
      // main: '#bbe1fa',
      navInitial: 'rgba(33, 33, 33, 0.5)',
      nav: '#212121',
      card: '#303030',
      fontColor1: '#bbe1fa',
      fontColor2: '#e5b9a2',
    },
    background: {
      default: '#121212',
    },
    type: 'dark',
  },
});

export const lightTheme = createMuiTheme({
  ...commonTheme,
  palette: {
    ...commonTheme.palette,
    primary: {
      ...commonTheme.palette.primary,
      main: '#ffffff',
      navInitial: 'rgba(238, 238, 238, 0.5)',
      nav: '#eeeeee',
      card: '#cccccc',
      fontColor1: '#0c69a6',
      fontColor2: '#64351c',
    },
    background: {
      default: '#ffffff',
    },
    type: 'light',
  },
});
