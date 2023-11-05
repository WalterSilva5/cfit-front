import { useState } from 'react';
import { Paper, Typography, TextField, Button } from '@mui/material';
import { AppApiProvider } from '@/providers/app-api.provider';
import { store } from '@/store/store';
import * as authDuck from '@/store/reducers/auth.duck';
import { useNavigate } from 'react-router-dom';

function LoginForm(_props: any) {
  const api = new AppApiProvider();
  const navigate = useNavigate()

  const [loginState, setLoginState] = useState({});

  const handleChange = (event: any) => {
    setLoginState({ ...loginState, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const result = await api.makeHttpRequest({
        method: 'POST',
        url: '/auth/login',
        data: loginState
      });
      store.dispatch(authDuck.actions.login(result));
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Paper
        style={{
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 2rem',
          boxShadow: 'none'
        }}
        elevation={3}
      >
        <Typography
          variant="h3"
          style={{
            marginBottom: '1rem'
          }}
        >
          Login
        </Typography>
        <TextField
          label="Usuário"
          variant="outlined"
          style={{ marginBottom: '1rem' }}
          fullWidth
          onChange={handleChange}
          name="email"
        />
        <TextField
          label="Senha"
          variant="outlined"
          type="password"
          style={{ marginBottom: '1rem' }}
          fullWidth
          onChange={handleChange}
          name="password"
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ width: '100%' }}
          onClick={handleSubmit}
          type="submit"
        >
          <b>Entrar</b>
        </Button>
      </Paper>
    </>
  );
}

export { LoginForm };
