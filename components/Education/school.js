import {Box, Stack, useMediaQuery} from '@mui/material'
import Image from 'next/image'
import {DescriptionTypography, TitleTypography} from '../commons/commons'
import {motion, useAnimation, useInView} from 'framer-motion'
import {useRef, useEffect} from 'react'

const MotionBox = motion(Box)
const MotionStack = motion(Stack)

// Adjust the dotVariants to include index-based delay
const dotVariants = {
  hidden: {scale: 0},
  visible: (index) => ({
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      delay: 0.5 + index * 0.1, // Stagger based on index
    },
  }),
}

// Adjust the contentVariants to include index-based delay
const contentVariants = {
  hidden: {y: -50, opacity: 0},
  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 1 + index * 0.1, // Additional delay so content comes after the dot
    },
  }),
}

const School = ({school, index}) => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const controls = useAnimation() // Controls for animation
  const ref = useRef(null) // Reference for the component
  const inView = useInView(ref) // Checks if component is in view

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <Box
      ref={ref}
      height="100%"
      width={isMobile ? '100%' : '25%'}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
    >
      {/* Dot centered on the horizontal line */}
      {!isMobile && (
        <MotionBox
          position="absolute"
          left="50%"
          top="calc(5vh - 8px)"
          width="17px"
          height="17px"
          borderRadius="50%"
          bgcolor="text.primary"
          sx={{
            transform: 'translate(-50%)', // Offset the dot to the left by half its height and width to center it on the line
          }}
          initial="hidden"
          animate={controls}
          variants={dotVariants}
          custom={index}
        />
      )}
      {!isMobile && (
        <DescriptionTypography
          component={motion.div}
          initial="hidden"
          animate={controls}
          variants={contentVariants}
          transition={{delay: 0.2}}
          marginBottom="10%"
          custom={index}
        >
          Dates: {school.dates}
        </DescriptionTypography>
      )}

      <MotionStack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        mt="10%"
        initial="hidden"
        animate={controls}
        variants={contentVariants}
        transition={{delay: 0.4}} // Additional delay for content
        custom={index}
      >
        <Box height="150px" width="150px" position="relative">
          <Image
            src={school.logo}
            fill
            sizes="100%"
            alt={`${school.schoolName} logo`}
            style={{
              objectFit: 'contain',
            }}
          />
        </Box>
        <TitleTypography align="center">{school.schoolName}</TitleTypography>
        <DescriptionTypography align="center">
          {school.major}
        </DescriptionTypography>
        {isMobile && (
          <DescriptionTypography align="center">
            Dates: {school.dates}
          </DescriptionTypography>
        )}
      </MotionStack>
    </Box>
  )
}

export default School
