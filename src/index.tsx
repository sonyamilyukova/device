import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/router/app';
import { ThemeProvider } from "styled-components";
import { deviceTheme } from './themes/device';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={deviceTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
