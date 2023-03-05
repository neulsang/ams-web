import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import BaseLayoutFooter from './footer/BaseLayoutFooter'
import { BaseLayoutHeader } from './header/BaseLayoutHeader'

const BaseLayout = () => {
  const location = useLocation()
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const userInfo = window.sessionStorage.getItem('userInfo') || ''
    setIsAuth(!!userInfo)
  }, [location])

  return (
    isAuth && (
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
    )
  )
}

export default BaseLayout
