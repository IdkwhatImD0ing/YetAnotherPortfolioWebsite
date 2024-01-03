import {Box, Stack, Button} from '@mui/material'
import {TitleTypography, DescriptionTypography} from '../commons'
import Line from '../line'
import UserProfile from '../profile'
import SkillCategory from './category'

const Skills = () => {
  return (
    <Box
      width="100%"
      paddingY="10vh"
      paddingX="5vw"
      position="relative"
      bgcolor="background.default"
      id="skills-section"
    >
      <Line />
      <Stack
        width="100%"
        height="100%"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={4}
      >
        <TitleTypography>Skills</TitleTypography>
        <DescriptionTypography maxWidth="650px">
          Throughout my career, I have gained significant experience and skills
          in various areas of this field.
        </DescriptionTypography>
        <Stack width="100%" spacing={2} direction="row">
          {Object.keys(UserProfile.skills).map((category, index) => (
            <SkillCategory
              key={index}
              category={category}
              skills={UserProfile.skills[category]}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}

export default Skills
