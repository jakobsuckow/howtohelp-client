import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import Root from './root';
import CookieConsent from './components/cookieConsent/cookieConsent';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <CookieConsent />
    <ThemeProvider theme={theme}>
      <Root />
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
