import {Box, Stack} from '@mui/material'
import Line from '../line'
import Display from './display'
import {TitleTypography, DescriptionTypography} from '../commons'

const Resume = () => {
  return (
    <Box
      width="100%"
      paddingTop="10vh"
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
