import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

const premiumTheme = createTheme({
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
      letterSpacing: '0.05em', 
    },
    button: {
      fontWeight: 600,
      textTransform: 'uppercase', 
    },
  },
  palette: {
    primary: {
      main: '#1a1a1a', 
    },
  },
});


const link = document.createElement('link');
link.href = 'https://googleapis.com';
link.rel = 'stylesheet';
document.head.appendChild(link);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <ThemeProvider theme={premiumTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
