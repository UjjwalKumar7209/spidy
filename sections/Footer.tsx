'use client'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  useGSAP(() => {
    gsap.from('#footer', {
      scrollTrigger: {
        trigger: '#footer img',
        scrub: true,
        start: 'top-=100 center+=50',
        end: 'top center+=50',
      },
      opacity: 0,
      translateY: 200
    })
  })
  return (
    <div
      id="footer"
      className="min-h-screen bg-black text-white flex justify-center items-center"
    >
      <Image
        src="/footer.png"
        width={500}
        height={500}
        className="-rotate-90"
        alt="spiderman"
      />
    </div>
  )
}
