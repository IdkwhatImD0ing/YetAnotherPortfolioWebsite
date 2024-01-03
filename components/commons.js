import {Typography, useMediaQuery} from '@mui/material'

const TitleTypography = ({children, sx, ...props}) => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <Typography
      sx={{
        color: 'text.primary', // Override any other styles as needed
        fontSize: isMobile ? '35px' : '45px',
        lineHeight: isMobile ? '38px' : '48px',
        fontWeight: 600,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  )
}

const DescriptionTypography = ({children, sx, ...props}) => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <Typography
      sx={{
        color: 'text.primary', // Override any other styles as needed
        fontSize: isMobile ? '14px' : '16px',
        fontWeight: 400,
        lineHeight: '159.5%',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  )
}

export {TitleTypography, DescriptionTypography}
