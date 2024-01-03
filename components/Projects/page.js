import {Box, Stack, Button} from '@mui/material'
import {TitleTypography, DescriptionTypography} from '../commons'
import Line from '../line'
import UserProfile from '../profile'
import Project from './project'
import {useState} from 'react'
import {motion} from 'framer-motion'

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({behavior: 'smooth', block: 'start'})
  }
}

const Projects = () => {
  const [showAll, setShowAll] = useState(false)

  const toggleShowAll = () => {
    setShowAll((prev) => {
      if (prev) {
        scrollToSection('projects-section')
      }
      return !prev
    }) // Toggle between showing all and showing limited
  }

  return (
    <Box
      width="100%"
      minHeight="100vh"
      paddingY="10vh"
      paddingX="5vw"
      position="relative"
      bgcolor="background.default"
      id="projects-section"
    >
      <Line />
      <Stack
        width="100%"
        height="100%"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={3}
      >
        <TitleTypography>Personal Projects</TitleTypography>
        <DescriptionTypography maxWidth="650px">
          Below you&apos;ll find a selection of my best work that reflects my
          skills and experience in Software Engineering. Each project was
          completed with great attention to detail and using modern
          technologies.
        </DescriptionTypography>
        {UserProfile.projects
          .slice(0, showAll ? undefined : 3)
          .map((project, index) => (
            <motion.div
              key={project.code} // Ensure a unique and consistent key for each project
              initial={{opacity: 0, height: 0}}
              animate={{opacity: 1, height: 'auto'}}
              exit={{opacity: 0, height: 0}}
              transition={{duration: 0.5}} // Adjust timing as needed
            >
              <Project key={index} project={project} />
            </motion.div>
          ))}
        <Box width="100%" display="flex" justifyContent="center" mt={2}>
          <Button
            onClick={toggleShowAll}
            sx={{
              textTransform: 'none',
              color: 'white',
              borderBottom: '2px solid white', // Adjust as needed
              borderRadius: '0', // Remove default border radius if you want a straight line
              padding: '8px 16px', // Adjust padding as needed
              ':hover': {
                backgroundColor: 'transparent', // Keep background transparent on hover
                background: 'rgba(255, 255, 255, 0.1)', // Slight white background on hover
                borderBottom: '2px solid white', // Keep consistent border on hover
              },
            }}
          >
            {showAll ? 'Less' : 'More'}
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default Projects
