import LoginForm from '@components/features/auth/login/forms/LoginForms'
import LoginFormTitle from '@components/features/auth/login/LoginFormTitle'
import { AccountCircle, Key } from '@mui/icons-material'
import { Button, Container, Grid, InputAdornment, Link, TextField, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'

function LoginContainer() {
  return (
    <div className='container mx-auto '>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        // TODO: 어느 페이지에 적용해야할까요? 화면에 레이아웃이 스크롤이 없고 간단한..곳들
        sx={{ height: 'calc( 100dvh - 77px)' }}
      >
        <LoginFormTitle />
        <LoginForm />
      </Grid>
    </div>
  )
}

export default LoginContainer
