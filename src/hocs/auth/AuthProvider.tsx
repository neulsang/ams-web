import ROTUE_PATHS from '@libs/constants/routerPaths'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type AuthProviderProps = {
  children: React.ReactNode
}
const AuthProvider = ({ children }: AuthProviderProps) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const userInfo = window.sessionStorage.getItem('userInfo') || ''
    setIsAuth(!!userInfo)
    if (!userInfo) {
      navigate(ROTUE_PATHS.ROOT)
    }
  }, [location])

  return isAuth ? <>{children}</> : <></>
}

export default AuthProvider
