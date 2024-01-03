import {Stack} from '@mui/material'
import LinkIcons from './icons'
import NavigationTabs from './navigation'
import Line from './line'

const Header = ({position}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      height="100px"
      bgcolor="background.default"
      position={position === 'top' ? 'absolute' : 'relative'}
      top={position === 'top' ? 0 : 'auto'}
      sx={{
        left: 0, // Stretch across by setting left and right to 0
        right: 0,
        width: '100%',
        zIndex: 1,
      }}
    >
      {position === 'bottom' && <Line nodot />}
      <LinkIcons />
      <NavigationTabs />
    </Stack>
  )
}

export default Header
