import {Box, Stack, useMediaQuery} from '@mui/material'
import {TitleTypography, DescriptionTypography} from '../commons/commons'
import Line from '../commons/line'
import UserProfile from '../profile'
import Timeline from './timeline'
import School from './school'

const Education = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <Box
      width="100%"
      height={isMobile ? 'auto' : '100vh'}
      paddingY="10vh"
      paddingX="10vw"
      position="relative"
      bgcolor="background.default"
      id="education-section"
    >
      <Line />
      <Stack
        width="100%"
        height="100%"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={3}
      >
        <TitleTypography>Education</TitleTypography>
        <Stack direction="column">
          <DescriptionTypography>
            Masters of Science in Computer Science
          </DescriptionTypography>
          <DescriptionTypography>
            Full Stack Web Development, Applied Machine Learning
          </DescriptionTypography>
        </Stack>
        {!isMobile && <Timeline />}
        <Stack
          direction={isMobile ? 'column' : 'row'}
          height={isMobile ? 'auto' : '50vh'}
          width="100%"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          sx={
            !isMobile
              ? {
                  position: 'absolute',
                  top: '30%',
                  left: '0%',
                }
              : {}
          }
        >
          {UserProfile.education.map((school, index) => (
            <School key={index} school={school} />
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}

export default Education
