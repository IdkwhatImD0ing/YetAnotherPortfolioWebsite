import {Avatar, Box, Button, Stack, Typography} from '@mui/material'
import {TitleTypography, DescriptionTypography} from '../commons'
import LinkIcons from './icons'
import NavigationTabs from './navigation'
import UserProfile from '../profile'
import Line from './line'
export default function Hero() {
  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      position="relative"
      bgcolor="background.default"
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
          <Stack direction="row">
            <TitleTypography>Hello There! I&apos;m&nbsp;</TitleTypography>
            <TitleTypography
              sx={{
                color: 'text.secondary',
              }}
            >
              {UserProfile.profile.name}
            </TitleTypography>
          </Stack>
          <DescriptionTypography>
            {UserProfile.profile.description}
          </DescriptionTypography>
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
