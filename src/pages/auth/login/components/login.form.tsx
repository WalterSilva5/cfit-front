import React from 'react'
import { Container, Grid, Paper, Typography, TextField, Button } from '@mui/material'

function LoginForm (props: any) {
  return (
        <>
            <Paper
                style={{
                  display: 'flex',
                  height: '100%',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0 2rem'
                }}
                elevation={3}
            >
                <Typography variant="h3" style={{
                  marginBottom: '1rem'
                }}>Login</Typography>
                <TextField label="Usuário" variant="outlined" style={{ marginBottom: '1rem' }} fullWidth />
                <TextField label="Senha" variant="outlined" type="password" style={{ marginBottom: '1rem' }} fullWidth />
                <Button variant="contained" color="primary" size='large'>
                    <b>Entrar</b>
                </Button>
            </Paper>

        </>
  )
};

export { LoginForm }
