import React from 'react'
import Container from '@mui/material/Container'

import LoginPage from '@pages/auth/login/LoginPage'
import { createTheme, ThemeProvider } from '@mui/material'
import { grey, yellow } from '@mui/material/colors'

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
    <ThemeProvider theme={theme}>
      <Container maxWidth='md'>
        <LoginPage />
      </Container>
    </ThemeProvider>
  )
}

export default App
