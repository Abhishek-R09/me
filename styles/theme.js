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
      main: '#212121',
      // main: '#121212',
      // main: '#bbe1fa',
      primary: '#212121',
      secondary: '#313131',
      navInitial: 'rgba(33, 33, 33, 0.5)',
      // nav: '#212121',
      nav: '#313131',
      card: '#303030',
      fontColor1: '#bbe1fa',
      fontColor2: '#e5b9a2',
      cardShadow: '#0c0c0c',
    },
    background: {
      // default: '#121212',
      default: '#212121',
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
      // main: '#ffffff',
      main: '#fafafa',
      primary: '#fafafa',
      secondary: '#eeeeee',
      navInitial: 'rgba(238, 238, 238, 0.5)',
      nav: '#eeeeee',
      // fontColor1: '#0c69a6',
      fontColor1: '#11649c',
      // fontColor2: '#64351c',
      fontColor2: '#543321',
      cardShadow: '#bdbdbd',
      // cardShadow: '#6f6f6f',
      // card: '#cccccc',
      card: '#e0e0e0',
    },
    background: {
      // default: '#ffffff',
      default: '#fafafa',
    },
    type: 'light',
  },
});
