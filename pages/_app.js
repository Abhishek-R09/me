/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import NavigationBar from '../components/Navigation/Navigation';
import '../styles/globals.css';

function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <>
      <NavigationBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
