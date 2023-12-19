'use client'

import {ThemeProvider, createTheme} from '@mui/material/styles'
import {createContext, useState, useMemo} from 'react'

const ColorModeContext = createContext({toggleColorMode: () => {}})

const CustomModeThemeProvider = ({children}) => {
  const [mode, setMode] = useState('light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'light' ? '#7e57c2' : '#673ab7',
          },
          secondary: {
            main: mode === 'light' ? '#b39ddb' : '#9575cd',
          },
          background: {
            default: mode === 'light' ? '#fafafa' : '#303030',
            paper: mode === 'light' ? '#ffffff' : '#424242',
          },
          text: {
            primary: mode === 'light' ? '#212121' : '#e0e0e0',
            secondary: mode === 'light' ? '#757575' : '#bdbdbd',
          },
        },
      }),
    [mode],
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export {ColorModeContext, CustomModeThemeProvider}
