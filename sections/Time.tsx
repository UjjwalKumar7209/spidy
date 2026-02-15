'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

export default function Time() {
  useGSAP(() => {
    gsap.from('#story', {
      scrollTrigger: {
        trigger: '#story',
        start: '-500 top'
      },
      xPercent: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2
    })

    gsap.from('#right', {
      scrollTrigger: {
        trigger: '#story',
        start: '-500 top'
      },
      xPercent: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#timeSection',
        start: 'top-=500 top',
        end: '+=1000',
        scrub: true,
        pin: true,
        anticipatePin: 1,
      }
    })

    tl.from('#trailer', {
      y: 100,
      rotate: 180,
      opacity: 0
    })
      .from('#imax', {
        y: 100,
        rotate: 180,
        opacity: 0
      })
      .from('#dec', {
        y: 100,
        rotate: 180,
        opacity: 0
      })
  })
  return (
    <section id="timeSection" className="flex justify-between gap-50">
      <div id="story" className="flex flex-col gap-4 w-1/3">
        <h2 className="text-[#FF0000] text-2xl tracking-tighter">
          THE ULTIMATE SPIDER-MAN STORY
        </h2>
        <p className="text-gray-400 text-xl tracking-tighter">
          WHEN A MULTIVERSE THREAT ARISES. PETER PARKER MUST JOIN FORCES WITH
          FAMILIAR ALLIES TO FACE HIS GREATEST CHALLENGE. THE FATE OF ALL
          REALITIES NOW RESTS IN HIS HANDS.
        </p>
      </div>
      <div id="circles" className="flex gap-3 w-1/3">
        <div
          id="trailer"
          className="w-30 h-30  rounded-full p-4 flex justify-center items-center text-black flex-col bg-white gap-3"
        >
          <h2 className="rotate-6">TRAILER</h2>
          <p className="font-medium text-3xl">3:04</p>
        </div>
        <div
          id="imax"
          className="w-30 h-30  rounded-full p-4 flex justify-center items-center text-black flex-col bg-[#FF0000] gap-3"
        >
          <h2 className="rotate-6">IMAX</h2>
          <p className="font-medium text-3xl">6</p>
        </div>
        <div
          id="dec"
          className="w-30 h-30  rounded-full p-4 flex justify-center items-center text-black flex-col bg-gray-500 gap-3"
        >
          <h2 className="rotate-6">DEC</h2>
          <p className="font-medium text-3xl">17</p>
        </div>
      </div>
      <div id="right" className="flex gap-3 w-1/3">
        <div className=" bg-[#FF0000] w-2" />
        <p className="text-2xl">
          SPIDER-MAN WAS SUPPOSED TO SWING OFF INTO THE SUNSET AFTER &apos;NO
          WAY HOME&apos;... LOOKS LIKE THE WEB NEVER SNAPS!
        </p>
      </div>
    </section>
  )
}
