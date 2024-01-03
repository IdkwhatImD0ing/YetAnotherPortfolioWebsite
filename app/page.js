'use client'
import Hero from '@/components/Hero/page'
import Projects from '@/components/Projects/page'
import {CustomModeThemeProvider} from './theme'
import Education from '@/components/Education/page'
import Skills from '@/components/Skills/page'

export default function Home() {
  return (
    <CustomModeThemeProvider>
      <Hero />
      <Projects />
      <Education />
      <Skills />
    </CustomModeThemeProvider>
  )
}
