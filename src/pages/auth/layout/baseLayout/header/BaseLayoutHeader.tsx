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
  const {
    isShowDrawer,
    setIsShowDrawer,
    menuId,
    handleProfileMenuOpen,
    mobileMenuId,
    handleMobileMenuOpen,
    renderMobileMenu,
    renderMenu,
  } = useBaseLayoutHeader()

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
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <BaseLayoutDrawer open={isShowDrawer} setOpen={setIsShowDrawer} />
      {renderMobileMenu}
      {renderMenu}
    </Box>
  )
}
