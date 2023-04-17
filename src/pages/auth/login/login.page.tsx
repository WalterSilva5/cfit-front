import { Container, Grid, Paper, Typography, TextField, Button } from '@mui/material';

export function LoginPage() {
  return (
    <Container>
      <Grid container spacing={0}
       style={{
        marginTop: '2rem',

      }}
      >
        <Grid item xs={12} sm={6}
          style={{
            height: '80vh',
          }}
        >
          <Paper
            style={{
              backgroundColor: '#1976d2',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
            elevation={3}
          >
            <Typography variant="h4">Bem-vindo</Typography>
            <Typography variant="body1">Faça login na sua conta</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}
          style={{
            height: '80vh',
          }}
        >
          <Paper
            style={{
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0 2rem',
            }}
            elevation={3}
          >
            <Typography variant="h3" style={{
              marginBottom: '1rem',
            }}>Login</Typography>
            <TextField label="Usuário" variant="outlined" style={{ marginBottom: '1rem' }} fullWidth />
            <TextField label="Senha" variant="outlined" type="password" style={{ marginBottom: '1rem' }} fullWidth />
            <Button variant="contained" color="primary" size='large'>
            <b>Entrar</b>
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
