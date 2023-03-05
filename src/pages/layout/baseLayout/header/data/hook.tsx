import { useAuthServiceApi } from '@libs/api/auth-service'
import ROTUE_PATHS from '@libs/constants/routerPaths'
import { AccountCircle } from '@mui/icons-material'
import { IconButton, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useBaseLayoutHeader = () => {
  const { logout } = useAuthServiceApi()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [isShowDrawer, setIsShowDrawer] = useState(false)
  const isMenuOpen = Boolean(anchorEl)
  const navigate = useNavigate()

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const ACCOUNT_MENUS = [
    {
      id: 1,
      text: '마이 페이지',
      onClick: () => {},
    },
    {
      id: 2,
      text: '로그아웃',
      onClick: async () => {
        logout().then(() => navigate(ROTUE_PATHS.LOGIN_PAGE))
        handleMenuClose
      },
    },
  ]

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {ACCOUNT_MENUS.map((accountMenu) => (
        <MenuItem key={accountMenu.id} onClick={accountMenu?.onClick}>
          {accountMenu.text}
        </MenuItem>
      ))}
    </Menu>
  )

  return {
    isShowDrawer,
    setIsShowDrawer,
    menuId,
    handleProfileMenuOpen,
    renderMenu,
  }
}

export default useBaseLayoutHeader
