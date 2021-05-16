/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import useDarkMode from 'use-dark-mode';
import NavigationBar from '../components/Navigation/Navigation';
import '../styles/globals.css';
import { darkTheme, lightTheme } from '../styles/theme';

function MyApp(props) {
  const { Component, pageProps } = props;
  const { value: isDark, toggle: toggleDarkMode } = useDarkMode(true);
  const themeConfig = isDark ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={themeConfig}>
      <NavigationBar toggleDarkMode={toggleDarkMode} isDark={isDark} />
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
