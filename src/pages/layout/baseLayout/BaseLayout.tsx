import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import BaseLayoutFooter from './footer/BaseLayoutFooter'
import { BaseLayoutHeader } from './header/BaseLayoutHeader'
import { UnAuthHeader } from './unAuthHeader/UnAuthHeader'

const BaseLayout = () => {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <Grid container>
      <Grid item xs={12}>
        {isAuth ? <BaseLayoutHeader /> : <UnAuthHeader />}
      </Grid>
      <Grid item xs={12}>
        <Outlet />
      </Grid>
      <Grid item xs={12}>
        <BaseLayoutFooter />
      </Grid>
    </Grid>
  )
}

export default BaseLayout
