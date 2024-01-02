'use client'

import {Box, Stack, Button} from '@mui/material'
import {useState, useEffect, useRef} from 'react'
import {DescriptionTypography, TitleTypography} from '../commons'
import {useInView} from 'framer-motion'
import {useRouter} from 'next/navigation'

const Project = ({project}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="400px"
      width="100%"
      paddingY="5%"
      paddingX="5%"
      bgcolor="background.paper"
    >
      {/*Flex Grow is needed here because setting height 
      to 100% doesn't work if parent doesnt have a set height*/}
      <Stack direction="row" width="100%" flexGrow={1} spacing={2}>
        <Stack
          width="50%"
          direction="column"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Stack
            direction="column"
            width="100%"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            <TitleTypography
              sx={{
                lineHeight: '111%',
              }}
            >
              {project.name}
            </TitleTypography>
            <Stack direction="row" sx={{flexWrap: 'wrap'}}>
              {project.techStack.map((tech, index) => (
                <DescriptionTypography
                  key={tech}
                  sx={{
                    mr: 0.5, // Adjust the right margin as needed
                    '&::after': {
                      content:
                        index < project.techStack.length - 1 ? "'/'" : "''",
                      marginLeft: 0.5, // Adjust spacing after the slash
                    },
                  }}
                >
                  {tech}
                </DescriptionTypography>
              ))}
            </Stack>
            <DescriptionTypography>{project.description}</DescriptionTypography>
          </Stack>
          <Stack direction="row" spacing={2} marginTop={2}>
            <Button
              variant="contained"
              sx={{
                borderRadius: '137px',
                textTransform: 'none',
              }}
            >
              <DescriptionTypography
                sx={{
                  fontSize: '20px',
                }}
              >
                Demo
              </DescriptionTypography>
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: '137px',
                textTransform: 'none',
                color: 'white', // Set the text color to white
                borderColor: 'white', // Set the border color to white
                ':hover': {
                  borderColor: '#f3f3f3', // Change to a slightly different shade for effect, adjust as needed
                  background: 'rgba(255, 255, 255, 0.1)', // Slight white background on hover
                  color: '#f3f3f3', // Change text color slightly for effect
                },
              }}
            >
              <DescriptionTypography
                sx={{
                  fontSize: '20px',
                }}
              >
                Github
              </DescriptionTypography>
            </Button>
          </Stack>
        </Stack>
        <VideoPlayer videoId={project.code} />
      </Stack>
    </Box>
  )
}

const VideoPlayer = ({videoId}) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (isInView) {
      setLoaded(true)
    }
  }, [isInView])

  return (
    <Box
      width="50%"
      flexGrow={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      ref={ref}
    >
      {loaded ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <TitleTypography>Loading...</TitleTypography>
      )}
    </Box>
  )
}

export default Project
