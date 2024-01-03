import {Avatar, Box, Button, Stack, useMediaQuery} from '@mui/material'
import {TitleTypography, DescriptionTypography} from '../commons'
import {useState} from 'react'
import UserProfile from '../profile'
import Line from './line'
import Contact from './contact'
export default function Hero() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <Box
      minHeight="100vh"
      width="100%"
      paddingY="10vh"
      paddingX="10vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
      bgcolor="background.default"
    >
      <Contact open={open} handleClose={handleClose} />
      <Stack
        direction={isMobile ? 'column' : 'row'}
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        spacing={isMobile ? 2 : 10}
      >
        <Stack direction="column" spacing={2}>
          <TitleTypography>
            Hello There! I&apos;m&nbsp;
            <TitleTypography
              component="span"
              sx={{
                color: 'text.secondary',
              }}
            >
              {UserProfile.profile.name}
            </TitleTypography>
          </TitleTypography>
          <DescriptionTypography>
            {UserProfile.profile.description}
          </DescriptionTypography>
          <Button
            variant="contained"
            onClick={handleOpen} // Opens the modal when clicked
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
          alt="profile"
          src={'/profile.jpg'}
          sx={{
            width: isMobile ? '250px' : '300px',
            height: isMobile ? '250px' : '300px',
          }}
        />
      </Stack>
      <Line />
    </Box>
  )
}
