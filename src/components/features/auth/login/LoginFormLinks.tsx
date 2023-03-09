import { Grid, Typography } from '@mui/material'
import React from 'react'
import ROTUE_PATHS from '@libs/constants/routerPaths'

import { Link } from 'react-router-dom'
const LoginButtonLinks = () => {
  return (
    <>
      <Grid container justifyContent='space-between'>
        <Grid item>
          <Link to={ROTUE_PATHS.JOIN_PAGE} color='secondary'>
            회원가입
          </Link>
        </Grid>
        <Grid item>
          <Link to={ROTUE_PATHS.FIND_ACCOUNT_INFO_PAGE} color='secondary'>
            아이디 찾기
          </Link>
          <Typography color='secondary' component='span'>
            {' | '}
          </Typography>
          <Link to='#' color='secondary'>
            비밀번호 찾기
          </Link>
        </Grid>
      </Grid>
    </>
  )
}

export default LoginButtonLinks
