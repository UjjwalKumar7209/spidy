'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {

  const navRef = useRef<HTMLElement>(null)

  useGSAP(() => {

    ScrollTrigger.create({
      start: "top -20",
      onEnter: () => {
        gsap.to(navRef.current, {
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(0,0,0,0.4)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          duration: 0.2
        })
      },
      onLeaveBack: () => {
        gsap.to(navRef.current, {
          backdropFilter: "blur(0px)",
          backgroundColor: "rgba(0,0,0,0)",
          borderBottom: "1px solid rgba(255,255,255,0)",
          duration: 0.3
        })
      }
    })

  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-5 transition-all"
    >
      <Link href="#home" className="md:inline hidden">
        <Image
          src="/logo.jpg"
          width={100}
          height={100}
          alt="logo"
          priority
          className="rounded-full w-24 h-auto"
        />
      </Link>

      <ul className="text-gray-300 font-bold text-lg flex gap-8">
        <li className="cursor-pointer hover:text-white">TOM HOLLAND</li>
        <li className="cursor-pointer hover:text-white">TOBEY MAGUIRE</li>
        <li className="cursor-pointer hover:text-white">ANDREW GARFIELD</li>
        <li className="cursor-pointer hover:text-white">ZENDAYA</li>
      </ul>

      <Link href="#home" className="md:inline hidden">
        <Image
          src="/spider.png"
          width={50}
          height={50}
          alt="logo"
          className="rounded-full w-10 h-auto"
        />
      </Link>
    </nav>
  )
}
