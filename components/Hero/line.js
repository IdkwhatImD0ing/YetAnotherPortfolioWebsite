import {Box, Typography} from '@mui/material'

const Line = () => {
  return (
    <Box
      sx={{
        position: 'absolute', // Use relative positioning as a reference for the absolute positioning of children
        width: 'max-content', // Fit to content width
        height: '40vh', // Adjust to the height of the line
        left: '3%', // Left position on the screen
        bottom: 0, // Align to the bottom of the parent component
      }}
    >
      {/* Vertical Line */}
      <Box
        sx={{
          position: 'absolute',
          left: 0, // Align with the parent container
          bottom: 0, // Align to the bottom
          width: '2px', // Line thickness
          height: '100%', // Full height of the parent container
          bgcolor: 'primary.main', // Use the primary color from the theme
        }}
      />
      {/* Rotated Text */}
      <Typography
        sx={{
          color: '#FFF',
          writingMode: 'vertical-rl', // Write text top to bottom
          transform: 'rotate(180deg)', // Flip text to be read from bottom to top
          whiteSpace: 'nowrap', // Keep text in one line
          marginLeft: '8px', // Adjust spacing between line and text as needed
        }}
        variant="subtitle1"
      >
        SCROLL TO EXPLORE
      </Typography>
    </Box>
  )
}

export default Line
