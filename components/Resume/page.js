import {Box, Stack} from '@mui/material'
import Line from '../commons/line'
import Display from './display'
import {TitleTypography} from '../commons/commons'

const Resume = () => {
  return (
    <Box
      width="100%"
      paddingTop="10vh"
      paddingX="10vw"
      position="relative"
      bgcolor="background.default"
      id="resume-section"
    >
      <Line />
      <Stack
        width="100%"
        height="100%"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={4}
        overflow={'hidden'}
      >
        <TitleTypography>Resume</TitleTypography>
        <Display />
      </Stack>
    </Box>
  )
}
export default Resume
