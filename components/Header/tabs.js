import {Stack, Typography, IconButton, useMediaQuery} from '@mui/material'
import {memo} from 'react'

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

const Tabs = () => (
  <Stack direction="row" spacing={2} alignItems="center">
    <StyledTypography onClick={() => scrollToSection('projects-section')}>
      Projects
    </StyledTypography>
    <StyledTypography>/</StyledTypography>
    <StyledTypography onClick={() => scrollToSection('education-section')}>
      Education
    </StyledTypography>
    <StyledTypography>/</StyledTypography>
    <StyledTypography onClick={() => scrollToSection('skills-section')}>
      Skills
    </StyledTypography>
    <StyledTypography>/</StyledTypography>
    <StyledTypography onClick={() => scrollToSection('resume-section')}>
      Resume
    </StyledTypography>
  </Stack>
)

export default memo(Tabs)
