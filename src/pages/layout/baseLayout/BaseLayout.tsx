import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import AuthProvider from 'src/hocs/auth/AuthProvider'
import BaseLayoutFooter from './footer/BaseLayoutFooter'
import { BaseLayoutHeader } from './header/BaseLayoutHeader'

const BaseLayout = () => {
  return (
    <AuthProvider>
      <Grid container>
        <Grid item xs={12}>
          <BaseLayoutHeader />
        </Grid>
        <Grid
          item
          xs={12}
          p={{
            sx: 0,
            md: 2,
          }}
        >
          <Outlet />
        </Grid>
        <Grid item xs={12}>
          <BaseLayoutFooter />
        </Grid>
      </Grid>
    </AuthProvider>
  )
}

export default BaseLayout
