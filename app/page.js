'use client'
import Hero from '@/components/Hero/page'
import Projects from '@/components/Projects/page'
import {CustomModeThemeProvider} from './theme'
import Education from '@/components/Education/page'

export default function Home() {
  return (
    <CustomModeThemeProvider>
      <Hero />
      <Projects />
      <Education />
    </CustomModeThemeProvider>
  )
}
