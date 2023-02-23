import React, { Suspense } from 'react'
import Container from '@mui/material/Container'

import { createTheme, Grid, ThemeProvider, useTheme } from '@mui/material'
import { grey, yellow } from '@mui/material/colors'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ROTUE_PATHS from './libs/constants/routerPaths'
import { ClimbingBoxLoader } from 'react-spinners'
import BaseLayout from '@pages/auth/layout/baseLayout/BaseLayout'

// auth
const LoginPage = React.lazy(() => import('@pages/auth/login/LoginPage'))
const JoinPage = React.lazy(() => import('@pages/auth/join/JoinPage'))

const Loader = () => {
  const theme = useTheme()
  return (
    <Grid
      container
      sx={{
        height: '100dvh',
        width: '100wv',
      }}
      alignItems='center'
      justifyContent='center'
    >
      <Grid item>
        <ClimbingBoxLoader color={theme.palette.primary.main} size={50} />
      </Grid>
    </Grid>
  )
}

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: yellow[500],
        light: yellow[400],
        dark: yellow[600],
      },
      secondary: {
        main: grey[600],
      },
    },
  })

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Container maxWidth={false} disableGutters>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path='/' element={<BaseLayout />}>
                <Route index path='/' element={<LoginPage />} />
                <Route path={ROTUE_PATHS.LOGIN_PAGE} element={<LoginPage />} />
                <Route path={ROTUE_PATHS.JOIN_PAGE} element={<JoinPage />} />
              </Route>
            </Routes>
          </Suspense>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
