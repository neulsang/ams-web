import { AccountCircle, Key } from '@mui/icons-material'
import { Button, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import LoginButtonLinks from '../LoginFormLinks'
import { useLoginForms } from './data'

const LoginForms = () => {
  const { control, handleSubmit, onSubmit, errors } = useLoginForms()
  return (
    <>
      <Grid item className='w-full border-gray-300 px-3 sm:w-auto sm:border sm:p-20'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.email}
                helperText={errors.email?.message as string}
                autoFocus
                fullWidth
                placeholder='아이디를 입력하세요.'
                inputProps={{
                  className: 'text-lg',
                }}
                type='email'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AccountCircle color='primary' />
                    </InputAdornment>
                  ),
                }}
                variant='standard'
              />
            )}
          />

          <Controller
            name='password'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.password}
                helperText={errors.password?.message as string}
                fullWidth
                placeholder='비밀번호를 입력하세요.'
                className='my-6'
                inputProps={{
                  className: 'text-lg',
                }}
                type='password'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Key color='primary' />
                    </InputAdornment>
                  ),
                }}
                variant='standard'
              />
            )}
          />

          <Button fullWidth variant='contained' className='my-5 py-4' type='submit'>
            <Typography fontSize='body1'>로그인</Typography>
          </Button>
        </form>

        <LoginButtonLinks />
      </Grid>
    </>
  )
}

export default LoginForms
