import {Box, Typography, useMediaQuery} from '@mui/material'
import {motion, useAnimation} from 'framer-motion'
import {useEffect, useRef} from 'react'
import {useInView} from 'framer-motion'

const Line = () => {
  const ref = useRef(null) // Create a reference to attach to the component
  const isInView = useInView(ref) // Tracks whether component is in viewport
  const controls = useAnimation() // Controls to start animation

  const isMobile = useMediaQuery('(max-width: 600px)')

  useEffect(() => {
    if (isInView) {
      controls.start('visible') // Start animation when in view
    }
  }, [controls, isInView]) // Dependency array includes controls and isInView

  return (
    <Box
      ref={ref} // Attach the ref
      position="absolute"
      width="1%"
      height={isMobile ? '20vh' : '30vh'}
      left="5%"
      bottom={0}
      as={motion.div} // Use motion.div for animation
      initial="hidden" // Initial state before in view
      animate={controls} // Controlled animation
      variants={{
        visible: {
          opacity: 1,
          height: isMobile ? '20vh' : '30vh',
          backgroundColor: 'primary.main',
        }, // Visible state
        hidden: {opacity: 0, height: '0vh', backgroundColor: 'rgba(0,0,0,0)'}, // Hidden state
      }}
      transition={{duration: 1, ease: 'easeInOut'}} // Animation transition
    >
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: 0,
          width: '2px',
          height: '100%',
          bgcolor: 'primary.main',
        }}
      />
      <Typography
        sx={{
          color: '#FFF',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          whiteSpace: 'nowrap',
          marginLeft: '4px',
        }}
        variant="subtitle1"
      >
        SCROLL TO EXPLORE
      </Typography>
    </Box>
  )
}

export default Line
