import {Stack, Box, useMediaQuery, useTheme} from '@mui/material'
import {useMenu} from '../menuContext'
import {Squash as Hamburger} from 'hamburger-react'
import Tabs from './tabs'
import {useEffect} from 'react'
import {useAnimation, motion} from 'framer-motion'
import {textVariants} from '../commons/variants'

const Navigation = ({inView}) => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const theme = useTheme()
  const {menuOpen, toggleMenu} = useMenu()

  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <>
      {isMobile ? (
        <Box position="absolute" right="10%" zIndex={2}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={textVariants}
          >
            <Hamburger
              size={25}
              toggled={menuOpen}
              toggle={toggleMenu}
              color={theme.palette.text.primary}
            />
          </motion.div>
        </Box>
      ) : (
        <Stack direction="row" spacing={2} position="absolute" right="10%">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={textVariants}
          >
            <Tabs />
          </motion.div>
        </Stack>
      )}
    </>
  )
}

export default Navigation
