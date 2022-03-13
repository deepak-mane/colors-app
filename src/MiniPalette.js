import React from 'react'
import { Box, ThemeProvider, createTheme } from '@mui/system'

const theme = createTheme({
  palette: {
    background: {
      paper: 'purple'
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A'
    },
    action: {
      active: '#001E3C'
    },
    success: {
      dark: '#009688'
    }
  }
})

function MiniPalette() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300
        }}
      >
        <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
        <Box
          sx={{
            color: 'text.primary',
            fontSize: 34,
            fontWeight: 'medium'
          }}
        >
          Mini Palette
        </Box>
        <Box
          sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14
          }}
        >
          +18.77%
        </Box>
        <Box
          sx={{
            color: 'text.secondary',
            display: 'inline',
            fontSize: 14
          }}
        >
          vs. last week
        </Box>
      </Box>
    </ThemeProvider>
  )
}
export default MiniPalette
