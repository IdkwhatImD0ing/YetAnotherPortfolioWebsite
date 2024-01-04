import {Stack, useMediaQuery} from '@mui/material'
import LinkIcons from './icons'
import Navigation from './navigation'
import Line from '../commons/line'

const Header = ({position}) => {
  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      height={isMobile ? '10vh' : '100px'}
      bgcolor="background.default"
      position={position === 'top' ? 'absolute' : 'relative'}
      top={position === 'top' ? 0 : 'auto'}
      sx={{
        left: 0, // Stretch across by setting left and right to 0
        right: 0,
        width: '100%',
      }}
    >
      {position === 'bottom' && <Line nodot />}
      <LinkIcons />
      <Navigation />
    </Stack>
  )
}

export default Header
