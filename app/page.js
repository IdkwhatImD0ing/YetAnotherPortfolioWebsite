'use client'
import Hero from '@/components/Hero/page'
import {Box} from '@mui/material'
import Projects from '@/components/Projects/page'
import {CustomModeThemeProvider} from './theme'
import Education from '@/components/Education/page'
import Skills from '@/components/Skills/page'
import Resume from '@/components/Resume/page'
import Header from '@/components/header'

export default function Home() {
  return (
    <CustomModeThemeProvider>
      <Header position="top" />
      <Hero />
      <Projects />
      <Education />
      <Skills />
      <Resume />
      <Header position="bottom" />
    </CustomModeThemeProvider>
  )
}
