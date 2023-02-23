import React from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'

export const UnAuthHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            AMS
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
