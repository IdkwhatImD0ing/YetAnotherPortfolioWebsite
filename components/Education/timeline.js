import {Box} from '@mui/material'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'framer-motion'
import {useRef, useEffect} from 'react'

const MotionBox = motion(Box)

const Timeline = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <MotionBox
      height="2px"
      width="100%"
      position="absolute"
      left={0}
      top="35%"
      bgcolor="text.primary"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          width: '100%',
        },
        hidden: {
          width: '0%',
        },
      }}
      transition={{duration: 1, ease: 'easeInOut'}}
    />
  )
}

export default Timeline
