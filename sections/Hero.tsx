'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText) 

export default function Hero() {
  useGSAP(() => {
    gsap.to('#marquee', {
      xPercent: -15,
      scrollTrigger: {
        trigger: '#hero',
        start: 'top 150',
        end: '800 150',
        scrub: true
        // markers: true
      },
      duration: 20,
      stagger: 0.2
    })

    const tl = gsap.timeline();
    const spiderText = SplitText.create("#text", { type: "chars" });

    tl.from('#circle', {
      translateX: 100,
      width: 1000,
      duration: 0.3,
      opacity: 0
    }).from(spiderText.chars, {
      xPercent: -15,
      opacity: 0,
      duration: 0.5,
      ease: 'power1.inOut',
      stagger: 0.02
    }).from('#spiderman', {
      xPercent: -15,
      opacity: 0,
      duration: 1.3,
      ease: 'power1.inOut',
      stagger: 0.02
    }).from('#marquee', {
      opacity: 0,
      xPercent: 100
    })
  })

  return (
    <section
      id="hero"
      className="relative flex items-start justify-center my-20 h-screen"
    >
      <div
        className="absolute w-112.5 h-112.5 
                  rounded-full 
                  bg-red-600 
                  blur-[180px] 
                  opacity-70 
                  -z-10"
      ></div>
      <div
        className="absolute w-112.5 h-112.5 
                  rounded-full 
                  bg-red-600 
                  blur-[180px] 
                  opacity-70 
                  -z-10"
      ></div>

      <div id='circle' className="relative flex justify-center my-10">
        <Image
          src="/circle.png"
          width={450}
          height={450}
          alt="circle"
          priority
          className='opacity-50'
        />
        <h1 id='text' className='absolute top-1/4 text-9xl -rotate-6 font-bold text-white tracking-tighter w-[46vw]'>SPIDERMAN</h1>

        <div id='spiderman' className="absolute top-24 left-1/2 -translate-x-1/2 w-[450px]">
          <Image
            src="/spiderman1.png"
            width={700}
            height={700}
            alt="spiderman"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      <div className="absolute top-[50vh] left-0 w-[99vw] overflow-x-hidden -z-10">
        <div id="marquee" className="w-[200vw]">
          <Image
            src="/marquee.png"
            width={3000}
            height={600}
            alt="marquee"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}
