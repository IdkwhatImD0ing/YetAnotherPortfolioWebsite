import {Box, LinearProgress, Stack, useTheme} from '@mui/material'
import {DescriptionTypography, TitleTypography} from '../commons'

const SkillCategory = ({category, skills}) => {
  return (
    <Stack
      direction="column"
      flexGrow={1}
      spacing={2}
      alignContent="center"
      justifyContent="flex-start"
    >
      <TitleTypography
        sx={{
          fontSize: '35px',
        }}
      >
        {category[0].toUpperCase() + category.slice(1)}
      </TitleTypography>
      <Stack direction="column" spacing={2} width="100%">
        {skills.map((skill, index) => (
          <Skill key={index} name={skill[0]} percentage={skill[1]} />
        ))}
      </Stack>
    </Stack>
  )
}

const Skill = ({name, percentage}) => {
  const theme = useTheme()
  const value = parseInt(percentage)
  return (
    <Stack direction="column" width="100%">
      <DescriptionTypography
        sx={{
          fontSize: '18px',
        }}
      >
        {name}
      </DescriptionTypography>
      <Box position="relative" width="100%">
        <LinearProgress
          width="100%"
          color="primary"
          variant="determinate"
          value={value}
          sx={{
            height: '20px',
            border: `1px solid ${theme.palette.text.primary}`,
            borderRadius: '10px',
            '& .MuiLinearProgress-bar': {
              borderRadius: '10px',
            },
          }}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <DescriptionTypography
            sx={{
              fontSize: '16px',
            }}
          >
            {percentage}
          </DescriptionTypography>
        </Box>
      </Box>
    </Stack>
  )
}

export default SkillCategory
