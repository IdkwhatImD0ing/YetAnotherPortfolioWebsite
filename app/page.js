'use client'
import Hero from '@/components/Hero/page'
import {Box, useMediaQuery} from '@mui/material'
import Projects from '@/components/Projects/page'
import {CustomModeThemeProvider} from './theme'
import Education from '@/components/Education/page'
import Skills from '@/components/Skills/page'
import Resume from '@/components/Resume/page'
import Header from '@/components/Header/header'
import {AnimatePresence} from 'framer-motion'
import FullScreenMenu from '@/components/Header/menu'
import {useState} from 'react'
import {MenuProvider} from '@/components/menuContext'

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <AnimatePresence>
      <CustomModeThemeProvider>
        <MenuProvider>
          <Box id="main-content">
            {isMobile && <FullScreenMenu />}
            <Header position="top" />
            <Hero />
            <Projects />
            <Education />
            <Skills />
            <Resume />
            <Header position="bottom" />
          </Box>
        </MenuProvider>
      </CustomModeThemeProvider>
    </AnimatePresence>
  )
}
