import {
  Stack,
  Typography,
  Drawer,
  IconButton,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import {useState, memo} from 'react'
import MenuIcon from '@mui/icons-material/Menu'

const StyledTypography = ({children, onClick}) => {
  return (
    <Typography
      sx={{
        color: '#FFF',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 600,
        textTransform: 'uppercase',
        cursor: onClick ? 'pointer' : 'default',
      }}
      onClick={onClick}
    >
      {children}
    </Typography>
  )
}

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({behavior: 'smooth', block: 'start'})
  }
}

const NavigationTabs = () => {
  const [drawerOpen, setDrawerOpen] = useState(false) // State to control Drawer open/close
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  const NavigationContent = () => (
    <Stack direction={isMobile ? 'column' : 'row'} spacing={2}>
      <StyledTypography onClick={() => scrollToSection('projects-section')}>
        Projects
      </StyledTypography>
      {!isMobile && <StyledTypography>/</StyledTypography>}
      <StyledTypography onClick={() => scrollToSection('education-section')}>
        Education
      </StyledTypography>
      {!isMobile && <StyledTypography>/</StyledTypography>}
      <StyledTypography onClick={() => scrollToSection('skills-section')}>
        Skills
      </StyledTypography>
      {!isMobile && <StyledTypography>/</StyledTypography>}
      <StyledTypography onClick={() => scrollToSection('resume-section')}>
        Resume
      </StyledTypography>
    </Stack>
  )
  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{position: 'absolute', right: '5%', color: '#FFF'}}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="top" open={drawerOpen} onClose={handleDrawerToggle}>
            <Box
              sx={{width: 250}} // Adjust the width of the sidebar as needed
              role="presentation"
              onClick={handleDrawerToggle}
              onKeyDown={handleDrawerToggle}
            >
              <NavigationContent />
            </Box>
          </Drawer>
        </>
      ) : (
        <Stack direction="row" spacing={2} position="absolute" right="5%">
          <NavigationContent />
        </Stack>
      )}
    </>
  )
}

export default NavigationTabs
