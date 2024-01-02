import {Box, Stack} from '@mui/material'
import {TitleTypography, DescriptionTypography} from '../commons'
import Line from './line'
import UserProfile from '../profile'
import Project from './project'

const Projects = () => {
  return (
    <Box
      width="100%"
      minHeight="100vh"
      paddingY="10vh"
      paddingX="5vw"
      position="relative"
      bgcolor="background.default"
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
        <DescriptionTypography>
          Below you&apos;ll find a selection of my best work that reflects my
          skills and experience in web development. Each project was completed
          with great attention to detail and using modern technologies.
        </DescriptionTypography>
        <Project project={UserProfile.projects[0]} />
      </Stack>
    </Box>
  )
}

export default Projects
