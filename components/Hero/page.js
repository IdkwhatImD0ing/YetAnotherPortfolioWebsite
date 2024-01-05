import {Avatar, Box, Button, Stack, useMediaQuery} from '@mui/material'
import {TitleTypography, DescriptionTypography} from '../commons/commons'
import {useState, useEffect, useRef} from 'react'
import UserProfile from '../profile'
import Line from './line'
import Contact from './contact'
import {useInView, motion, useAnimation} from 'framer-motion'

const MotionAvatar = motion(Avatar)
const MotionButton = motion(Button)

export default function Hero() {
  const ref = useRef(null)
  const inView = useInView(ref)
  const controls = useAnimation()

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const isMobile = useMediaQuery('(max-width: 600px)')

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <Box
      minHeight="100vh"
      width="100%"
      paddingY="10vh"
      paddingX="10vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
      bgcolor="background.default"
      ref={ref}
    >
      <Contact open={open} handleClose={handleClose} />
      <Stack
        direction={isMobile ? 'column' : 'row'}
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        spacing={isMobile ? 2 : 10}
        as={motion.div}
        initial="hidden"
        animate={controls}
        variants={{
          visible: {opacity: 1, translateY: 0},
          hidden: {opacity: 0, translateY: 50},
        }}
        transition={{duration: 0.5, delay: 0.2}}
      >
        <Stack direction="column" spacing={2}>
          <TitleTypography>
            Hello There! I&apos;m&nbsp;
            <TitleTypography
              component={motion.span}
              initial={{opacity: 0, x: -10}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.5, delay: 1}}
              sx={{
                color: 'text.secondary',
              }}
            >
              {UserProfile.profile.name}
            </TitleTypography>
          </TitleTypography>
          <DescriptionTypography>
            {UserProfile.profile.description}
          </DescriptionTypography>
          <MotionButton
            variant="contained"
            onClick={handleOpen} // Opens the modal when clicked
            initial={{opacity: 0, translateY: 20}}
            animate={{opacity: 1, translateY: 0}}
            transition={{duration: 0.5, delay: 0.4}}
            sx={{
              width: '100px',
              borderRadius: '72px',
              textTransform: 'none',
            }}
          >
            Contact
          </MotionButton>
        </Stack>
        <MotionAvatar
          alt="profile"
          src={'/profile.jpg'}
          sx={{
            width: '300px',
            height: '300px',
          }}
          initial={{opacity: 0, scale: 0.8}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5, delay: 0.5}}
        />
      </Stack>
      <Line />
    </Box>
  )
}
