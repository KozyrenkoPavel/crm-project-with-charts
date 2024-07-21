import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import App from './App.jsx';
import './index.css';
import './i18n.js';

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: '#61dafb',
  //   },
  //   secondary: {
  //     main: '#da61bf',
  //   },
  // },
});

console.log(theme);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
