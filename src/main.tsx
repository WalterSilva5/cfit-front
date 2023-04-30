import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.module.scss';
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.style'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  </React.StrictMode>,
)
