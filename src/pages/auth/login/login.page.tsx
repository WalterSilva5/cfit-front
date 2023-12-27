import { Container, Grid, Paper, Typography} from '@mui/material';
import { LoginForm } from './components/login.form';

export function LoginPage() {
  return (
    <Container>
      <Grid
        container
        spacing={0}
        style={{
          marginTop: '2rem'
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            height: '80vh'
          }}
        >
          <Paper
            style={{
              backgroundColor: '#015e1a',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%'
            }}
            elevation={3}
          >
            <Typography variant="h4">Bem-vindo</Typography>
            <Typography variant="body1">Faça login na sua conta</Typography>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            height: '80vh'
          }}
        >
          <LoginForm />
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoginPage;
