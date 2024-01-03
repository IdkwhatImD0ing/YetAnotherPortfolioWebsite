import {Avatar, Box, Button, Stack, Modal, TextField} from '@mui/material'
import {TitleTypography, DescriptionTypography} from '../commons'

const Contact = ({open, handleClose}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableScrollLock
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack
        height="500px"
        width="400px"
        borderRadius="10px"
        padding="24px"
        display="flex"
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        backgroundColor="background.paper"
        spacing={2}
      >
        <TitleTypography>Get In Touch</TitleTypography>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          sx={{
            width: '100%',
          }}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{
            width: '100%',
          }}
        />
        <TextField
          id="outlined-basic"
          label="Message"
          multiline
          rows={5}
          backgroundColor="background.form"
          variant="outlined"
          sx={{
            width: '100%',
            flexGrow: 1,
          }}
        />
        <Button
          variant="contained"
          sx={{
            width: '100px',
            borderRadius: '72px',
            textTransform: 'none',
          }}
        >
          Send
        </Button>
      </Stack>
    </Modal>
  )
}

export default Contact
