import {Box} from '@mui/material'

const Line = ({nodot}) => {
  return (
    <Box
      position="absolute"
      width="1%"
      height="100%" // Adjust to the height of the line
      left="5%" // Left position on the screen
      bottom={0} // Align to the bottom of the parent component
    >
      {/* Vertical Line */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%', // Center horizontally relative to the parent container
          transform: 'translateX(-50%)', // Offset the line to the left by half its width to center it on the screen
          bottom: 0, // Align to the bottom
          width: '2px', // Line thickness
          height: '100%', // Full height of the parent container
          bgcolor: 'primary.main', // Use the primary color from the theme
        }}
      />
      {/* Dot on vertical line 10% from the top */}
      {!nodot && (
        <Box
          sx={{
            position: 'absolute',
            left: '50%', // Center horizontally relative to the parent container
            transform: 'translateX(-50%)', // Offset the dot to the left by half its width to center it on the line
            top: `calc(10vh + 16px)`, // Position the dot 10% from the top of the line
            width: '17px', // Dot size
            height: '17px', // Dot size
            borderRadius: '50%', // Make it a circle
            bgcolor: 'primary.main', // Use the primary color from the theme
          }}
        />
      )}
    </Box>
  )
}

export default Line
