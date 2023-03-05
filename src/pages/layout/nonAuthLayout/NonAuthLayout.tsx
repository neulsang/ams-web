import React from 'react'
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import BaseLayoutFooter from '../baseLayout/footer/BaseLayoutFooter'

import { NonAuthHeader } from './header/nonAuthHeader'

const NonAuthLayout = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <NonAuthHeader />
      </Grid>
      <Grid
        item
        xs={12}
        px={{
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
  )
}

export default NonAuthLayout
