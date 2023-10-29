import React, { useState } from 'react';
import './App.module.scss';
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MenuComponent from './components/menu/menu';
import Routes from './routes';
import * as themes from './styles/theme.colors';
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import { Box } from '@mui/material';
import Navbar from './components/navbar/navbar';

export const ThemeContext = React.createContext<{
  theme: any;
  setTheme: React.Dispatch<React.SetStateAction<any>>;
}>({ theme: themes.defaultTheme, setTheme: () => {} });

function App() {
  const [theme, setTheme] = useState(themes.defaultTheme);
  const location = window.location;
  const authPages = ['/auth', '/auth/login', '/auth/register'];
  const [useMenu, setUseMenu] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          className="appWrapper"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            margin: 0,
            padding: 0,
            bgcolor: theme.palette.background.default,
            color: theme.palette.text.primary,
            boxShadow: 'none'
          }}
        >
          <Provider store={store}>
            <BrowserRouter>
              {authPages.includes(location.pathname) ? null : (
                <>
                  <Navbar useMenu={useMenu} setUseMenu={setUseMenu} username="" />
                  <MenuComponent useMenu={useMenu} />
                </>
              )}
              <Box
                className="contentArea"
                style={{
                  display: 'flex',
                  minHeight: '80vh',
                  width: '100%',
                  height: '100%'
                }}
              >
                <Box
                  sx={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    padding: '0px',
                    margin: '0px'
                  }}
                >
                  <Routes />
                </Box>
              </Box>
            </BrowserRouter>
          </Provider>
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
