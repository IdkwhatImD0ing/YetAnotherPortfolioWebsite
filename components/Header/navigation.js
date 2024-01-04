import {Stack, Box, useMediaQuery, useTheme} from '@mui/material'
import {useMenu} from '../menuContext'
import {Squash as Hamburger} from 'hamburger-react'
import Tabs from './tabs'

const Navigation = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const theme = useTheme()
  const {menuOpen, toggleMenu} = useMenu()

  return (
    <>
      {isMobile ? (
        <>
          <Box position="absolute" right="10%" zIndex={2}>
            <Hamburger
              size={25}
              toggled={menuOpen}
              toggle={toggleMenu}
              color={theme.palette.text.primary}
            />
          </Box>
        </>
      ) : (
        <Stack direction="row" spacing={2} position="absolute" right="10%">
          <Tabs />
        </Stack>
      )}
    </>
  )
}

export default Navigation
