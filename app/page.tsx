'use client'

import { useEffect, useState } from 'react'
import Footer from '@/sections/Footer'
import Hero from '@/sections/Hero'
import Name from '@/sections/Name'
import Poster from '@/sections/Poster'
import Time from '@/sections/Time'

export default function Home() {

  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    checkScreen()
    window.addEventListener('resize', checkScreen)

    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  if (!isDesktop) {
    return (
      <div className="h-screen w-screen bg-black text-white flex items-center justify-center text-center p-6">
        <h1 className="text-2xl font-bold">
          This website is best viewed on a desktop 💻 <br />
          Please open it on your PC for a better experience.
        </h1>
      </div>
    )
  }

  return (
    <>
      <Hero />
      <Time />
      <Name />
      <Poster />
      <Footer />
    </>
  )
}
