import {Box, Stack} from '@mui/material'
import Image from 'next/image'
import {DescriptionTypography, TitleTypography} from '../commons'

const School = ({school}) => {
  return (
    <Box
      height="100%"
      width="350px"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
    >
      {/* Dot centered on the horizontal line */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%', // Center horizontally relative to the parent container
          transform: 'translate(-50%)', // Offset the dot to the left by half its height and width to center it on the line
          top: 'calc(5vh - 8px)', // Position the dot 10% from the top of the line
          width: '17px', // Dot size
          height: '17px', // Dot size
          borderRadius: '50%', // Make it a circle
          bgcolor: 'text.primary', // Use the primary color from the theme
        }}
      />
      <DescriptionTypography>Dates: {school.dates}</DescriptionTypography>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        position="absolute"
        top="25%"
      >
        <Box height="150px" width="150px" position="relative">
          <Image
            src={school.logo}
            fill
            alt={`${school.schoolName} logo`}
            style={{
              objectFit: 'contain',
            }}
          />
        </Box>
        <TitleTypography
          align="center"
          sx={{
            fontSize: '35px',
            lineHeight: '38px',
          }}
        >
          {school.schoolName}
        </TitleTypography>
        <DescriptionTypography align="center">
          {school.major}
        </DescriptionTypography>
      </Stack>
    </Box>
  )
}

export default School
