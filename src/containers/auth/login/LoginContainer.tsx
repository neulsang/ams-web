import LoginForm from '@components/features/auth/login/forms/LoginForms'
import LoginFormTitle from '@components/features/auth/login/LoginFormTitle'
import { Grid } from '@mui/material'
import React from 'react'

function LoginContainer() {
  return (
    <div className='container mx-auto '>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        sx={{ height: 'calc( 100dvh - 105px)' }}
      >
        <LoginFormTitle />
        <LoginForm />
      </Grid>
    </div>
  )
}

export default LoginContainer
