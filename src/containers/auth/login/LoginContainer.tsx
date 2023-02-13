import { AccountCircle, Key } from '@mui/icons-material'
import { Button, Container, Grid, InputAdornment, Link, TextField, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'

function LoginContainer() {
  return (
    <Container maxWidth='lg'>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        className='h-screen'
      >
        <Grid item className='font-bol mb-4 text-center text-2xl'>
          AMS
        </Grid>
        <Grid item className='border-gray-300 sm:border' p={{ xs: 0, sm: 2 }}>
          <TextField
            fullWidth
            className='mb-6'
            id='input-with-icon-textfield'
            placeholder='아이디를 입력하세요.'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircle color='primary' />
                </InputAdornment>
              ),
            }}
            variant='standard'
          />
          <TextField
            fullWidth
            id='input-with-icon-textfield'
            placeholder='비밀번호를 입력하세요.'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Key color='primary' />
                </InputAdornment>
              ),
            }}
            variant='standard'
          />

          <Button fullWidth variant='contained' className='my-5 py-4'>
            <Typography fontSize='body1'>로그인</Typography>
          </Button>

          <Grid container justifyContent='space-between'>
            <Grid item>
              <Link href='#' color='secondary' underline='none'>
                회원가입
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' color='secondary' underline='none'>
                아이디 찾기
              </Link>
              <Typography color='secondary' component='span'>
                {' | '}
              </Typography>
              <Link href='#' color='secondary' underline='none'>
                비밀번호 찾기
              </Link>
            </Grid>
          </Grid>
          <Grid className='mt-10 text-center text-sm text-gray-400'>
            Copyright © Neulsang Corp. All rights reserved.
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default LoginContainer
