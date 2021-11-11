import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./assets/theme/theme-rtl"


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
