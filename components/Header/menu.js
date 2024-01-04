import {motion, useScroll} from 'framer-motion'
import {Box, Stack, Typography} from '@mui/material'
import {useEffect, useState, memo, useCallback} from 'react'
import {useMenu} from '../menuContext'
import {AnimatePresence} from 'framer-motion'

const MotionTypography = motion(Typography)

const AnimatedTab = ({bottom, sectionId, onClick, index}) => {
  const reverseStaggerDelay = (4 - index - 1) * 0.1
  return (
    <MotionTypography
      key={sectionId}
      onClick={onClick}
      initial={{
        opacity: 0,
        rotateY: -90, // Flip from the right
      }}
      animate={{
        opacity: 1,
        rotateY: 0, // End facing the viewer
        transition: {
          duration: 0.5,
          delay: bottom ? reverseStaggerDelay : index * 0.1,
          ease: 'easeInOut',
        },
      }}
      exit={{
        opacity: 0,
        rotateY: -90, // Flip to the right
        transition: {
          duration: 0.5,
          delay: bottom ? index * 0.1 : reverseStaggerDelay,
          ease: 'easeInOut',
        },
      }}
      sx={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'right',
        color: '#FFF',
        fontSize: '40px',
        fontStyle: 'normal',
        fontWeight: 600,
        textTransform: 'uppercase',
        cursor: 'pointer',
      }}
    >
      {sectionId.split('-')[0]}
    </MotionTypography>
  )
}

const MotionBox = motion(Box)

const FullScreenMenu = () => {
  const {menuOpen, toggleMenu} = useMenu()
  const [currentScrollY, setCurrentScrollY] = useState(0) // This is the current scroll position when menu is opened
  const {scrollY} = useScroll()

  useEffect(() => {
    const mainContent = document.getElementById('main-content')
    let originalPosition = window.getComputedStyle(mainContent).position
    let originalTop = mainContent.style.top

    if (menuOpen) {
      // Apply styles to freeze page
      const scrollYValue = scrollY.get()
      setCurrentScrollY(scrollYValue) // Store the current scroll position
      mainContent.style.position = 'fixed'
      mainContent.style.top = `-${scrollYValue}px` // Freeze the page at the current scroll position
    } else {
      // Remove styles and return to original scroll position
      mainContent.style.position = originalPosition
      mainContent.style.top = originalTop
      // Ensure we're scrolling back to the exact position before menu was opened
      window.scrollTo(0, currentScrollY)
    }

    return () => {
      // Cleanup function to ensure styles are reset when the component unmounts or before next effect runs
      mainContent.style.position = originalPosition
      mainContent.style.top = originalTop
    }
    // DO NOT ADD CURRENTSCROLLY TO DEPENDENCIES
  }, [menuOpen, scrollY])

  const scrollToSection = useCallback(
    (sectionId) => {
      toggleMenu(false)

      // Use a timeout to delay the scrolling action until after the menu has closed
      setTimeout(() => {
        const section = document.getElementById(sectionId)
        if (section) {
          // Scroll to the section after the menu has closed and main content is reset
          section.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
      }, 500)
    },
    [toggleMenu],
  )

  const shouldAnimateFromBottom = currentScrollY > 1000
  const Tabs = memo(() => (
    <Stack
      width="100%"
      direction="column"
      spacing={2}
      alignItems="flex-end"
      sx={{
        perspective: '800px',
      }}
    >
      {[
        'projects-section',
        'education-section',
        'skills-section',
        'resume-section',
      ].map((sectionId, index) => (
        <AnimatedTab
          bottom={shouldAnimateFromBottom}
          key={sectionId}
          sectionId={sectionId}
          onClick={() => scrollToSection(sectionId)}
          index={index}
        />
      ))}
    </Stack>
  ))
  Tabs.displayName = 'Tabs'

  return (
    <MotionBox
      animate={{height: menuOpen ? '100vh' : 0}} // Animate to 100vh when open and back to 0 when closed
      transition={{duration: 0.5, ease: 'easeInOut'}} // Adjust the duration and easing as needed
      position="fixed"
      top={shouldAnimateFromBottom ? 'auto' : 0}
      bottom={shouldAnimateFromBottom ? 0 : 'auto'}
      left={0}
      width="100vw"
      bgcolor="background.default"
      overflow="hidden"
      zIndex={1}
      display="flex"
      flexDirection="column"
      justifyContent={shouldAnimateFromBottom ? 'flex-end' : 'flex-start'}
      alignItems="flex-end"
    >
      <AnimatePresence>
        {menuOpen && (
          <Box paddingY="12vh" paddingX="10vw">
            <Tabs />
          </Box>
        )}
      </AnimatePresence>
    </MotionBox>
  )
}

export default FullScreenMenu
