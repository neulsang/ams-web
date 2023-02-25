import ApartmentIcon from '@mui/icons-material/Apartment';
import CategoryIcon from '@mui/icons-material/Category';
import DescriptionIcon from '@mui/icons-material/Description';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useTheme } from '@mui/system'
import React from 'react'

const useBaseLayoutDrawer = () => {
  const drawerWidth = 240
  const theme = useTheme()

  const menus = [
    {
      id: 1,
      text: '거래처 관리',
      path: '',
      icon: <ApartmentIcon/>
    },
    {
      id: 2,
      text: '제품 관리',
      path: '',
      icon: <CategoryIcon/>
    },
    {
      id: 3,
      text: '거래처 일지 관리',
      path: '',
      icon: <DescriptionIcon/>
    },
    {
      id: 4,
      text: '거래 관리',
      path: '',
      icon: <ShoppingCartIcon/>
    },
  ]

  return {
    drawerWidth,
    theme,
    menus
  }
}

export default useBaseLayoutDrawer