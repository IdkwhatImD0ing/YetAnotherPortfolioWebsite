'use client'
import {Avatar, Box, Button, Stack, Typography} from '@mui/material'
import LinkIcons from './icons'
import NavigationTabs from './navigation'
import UserProfile from '../profile'
import Line from './line'
export default function Hero() {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <LinkIcons />
      <NavigationTabs />
      <Stack
        direction="row"
        width="80%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack direction="column" spacing={3}>
          <Stack direction="row" spacing={2}>
            <Typography
              variant="h1" // This variant is typically used for large headers
              sx={{
                color: '#FFF', // Sets the text color
                fontFamily: 'Kanit', // Sets the font family
                fontSize: '50px', // Sets the font size
                fontStyle: 'normal', // Sets the font style
                fontWeight: 600, // Sets the font weight; 'fontWeightBold' can also be used if it corresponds to 600 in the theme
                lineHeight: 'normal', // Sets the line height; 'normal' means it will use the browser's default
                textTransform: 'capitalize', // Capitalizes each word
              }}
            >
              Hello There! I&apos;m{' '}
            </Typography>
            <Typography
              variant="h1" // This variant is typically used for large headers
              sx={{
                color: 'text.secondary', // Sets the text color
                fontFamily: 'Kanit', // Sets the font family
                fontSize: '50px', // Sets the font size
                fontStyle: 'normal', // Sets the font style
                fontWeight: 600, // Sets the font weight; 'fontWeightBold' can also be used if it corresponds to 600 in the theme
                lineHeight: 'normal', // Sets the line height; 'normal' means it will use the browser's default
                textTransform: 'capitalize', // Capitalizes each word
              }}
            >
              {UserProfile.profile.name}
            </Typography>
          </Stack>
          <Typography
            sx={{
              color: 'white', // You can also use the theme palette for consistency: theme => theme.palette.common.white
              fontFamily: 'Kanit',
              fontSize: '16px', // Adjust as needed, or use theme values for consistency
              fontStyle: 'normal',
              fontWeight: 400, // Use 'fontWeightRegular' if it corresponds to 400 in your theme
              lineHeight: '159.5%', // This sets the line height as a percentage of the font size
            }}
          >
            {UserProfile.profile.description}
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: '100px',
              borderRadius: '72px',
              textTransform: 'none',
            }}
          >
            Contact
          </Button>
        </Stack>
        <Avatar
          sx={{
            width: '200px',
            height: '200px',
          }}
        />
      </Stack>
      <Line />
    </Box>
  )
}
