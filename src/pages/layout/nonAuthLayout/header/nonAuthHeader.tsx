import React from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import ROTUE_PATHS from '@libs/constants/routerPaths'

export const NonAuthHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            <Link to={ROTUE_PATHS.ROOT}>AMS</Link>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
