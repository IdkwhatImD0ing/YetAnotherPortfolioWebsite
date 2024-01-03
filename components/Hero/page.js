import {Avatar, Box, Button, Stack} from '@mui/material'
import {TitleTypography, DescriptionTypography} from '../commons'
import {useState} from 'react'
import UserProfile from '../profile'
import Line from './line'
import Contact from './contact'
export default function Hero() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
      bgcolor="background.default"
    >
      <Contact open={open} handleClose={handleClose} />
      <Stack
        direction="row"
        width="80%"
        justifyContent="space-between"
        alignItems="center"
        spacing={20}
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
            width: '300px',
            height: '300px',
          }}
        />
      </Stack>
      <Line />
    </Box>
  )
}
