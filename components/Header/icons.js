import UserProfile from '@/components/profile'
import DevpostIcon from '@/public/devpost.svg'
import GithubIcon from '@/public/github.svg'
import LinkedInIcon from '@/public/linkedin.svg'
import {Stack} from '@mui/material'
import Image from 'next/image'

const IconSize = 25

const LinkIcons = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      position="absolute"
      left="10%"
      zIndex={2}
    >
      <a
        href={UserProfile.profile.devpost}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={DevpostIcon}
          alt="Devpost"
          height={IconSize}
          width={IconSize}
        />
      </a>
      <a
        href={UserProfile.profile.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={GithubIcon}
          alt="Github"
          height={IconSize}
          width={IconSize}
        />
      </a>
      <a
        href={UserProfile.profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={LinkedInIcon}
          alt="LinkedIn"
          height={IconSize}
          width={IconSize}
        />
      </a>
    </Stack>
  )
}

export default LinkIcons
