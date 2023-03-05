import React from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import MoreIcon from '@mui/icons-material/MoreVert'
import MenuIcon from '@mui/icons-material/Menu'
import { useBaseLayoutHeader } from './data'
import BaseLayoutDrawer from './drawer/BaseLayoutDrawer'
import { Link } from 'react-router-dom'
import ROTUE_PATHS from '@libs/constants/routerPaths'

export const BaseLayoutHeader = () => {
  const { isShowDrawer, setIsShowDrawer, menuId, handleProfileMenuOpen, renderMenu } =
    useBaseLayoutHeader()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={() => setIsShowDrawer(true)}
            sx={{ mr: 2, ...(isShowDrawer && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            <Link to={ROTUE_PATHS.ROOT}>AMS</Link>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <BaseLayoutDrawer open={isShowDrawer} setOpen={setIsShowDrawer} />

      {renderMenu}
    </Box>
  )
}
