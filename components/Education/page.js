import {Box, Stack} from '@mui/material'
import {TitleTypography, DescriptionTypography} from '../commons'
import Line from '../line'
import UserProfile from '../profile'
import Timeline from './timeline'
import School from './school'

const Education = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      paddingY="10vh"
      paddingX="5vw"
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
        <Timeline />
        <Stack
          direction="row"
          height="50vh"
          width="100%"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          sx={{
            position: 'absolute',
            top: '30%',
            left: '0%',
          }}
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
