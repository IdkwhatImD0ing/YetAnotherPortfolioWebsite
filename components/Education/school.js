import {Box, Stack, useMediaQuery} from '@mui/material'
import Image from 'next/image'
import {DescriptionTypography, TitleTypography} from '../commons/commons'

const School = ({school}) => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <Box
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
      )}
      {!isMobile && (
        <DescriptionTypography marginBottom="10%">
          Dates: {school.dates}
        </DescriptionTypography>
      )}

      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        mt="10%"
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
      </Stack>
    </Box>
  )
}

export default School
