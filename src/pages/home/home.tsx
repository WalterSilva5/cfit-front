import { Button, Typography, Box } from '@mui/material';
import * as themes from '../../styles/theme.colors';
import { ThemeContext } from '../../App';
import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';

export function Home() {
  const theme = useTheme();

  const themeContext = useContext(ThemeContext);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary
      }}
    >
      <Typography variant="h1" component="div">
        HOME
      </Typography>
      <Typography variant="h2" component="div">
        Escolha um tema:
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => themeContext.setTheme(themes.defaultTheme)}
      >
        Tema Padrão
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => themeContext.setTheme(themes.darkTheme)}
      >
        Tema escuro
      </Button>
    </Box>
  );
}

export default Home;
