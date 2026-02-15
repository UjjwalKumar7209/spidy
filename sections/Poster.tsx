'use client'
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

export default function Poster() {
  useGSAP(() => {
    gsap.from('#heading', {
        scrollTrigger: {
            trigger: '#heading',
            start: 'top-=500, top',
        },
        opacity: 0,
        xPercent: -100,
        duration: 1
    })

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#posterSection',
            start: 'top-=100 top',
            end: '+=1000',
            scrub: true,
            pin: true,
            anticipatePin: 1,
        }
    })

    tl.from('#poster1', {
        y: 100,
        // rotate: 180,
        opacity: 0
    }).from('#poster2', {
        y: 100,
        // rotate: 180,
        opacity: 0
    }).from('#poster3', {
        y: 100,
        // rotate: 180,
        opacity: 0
    }).from('#poster4', {
        y: 100,
        // rotate: 180,
        opacity: 0
    })
  })
  return (
    <div id="posterSection" className="min-h-screen bg-amber-50 text-black flex justify-between items-center p-4">
      <div className="w-1/2 flex gap-4">
        <Image id="poster1" src='/poster1.jpeg' width={300} height={300} alt="poster1" className="rounded-xl rotate-6 h-[35vh] w-auto" />
        <Image id="poster2" src='/poster2.jpeg' width={300} height={300} alt="poster1" className="rounded-xl -rotate-12 h-[35vh] w-auto" />
        <Image id="poster3" src='/poster3.jpeg' width={300} height={300} alt="poster1" className="rounded-xl rotate-12 h-[35vh] w-auto" />
        <Image id="poster4" src='/poster4.jpeg' width={300} height={300} alt="poster1" className="rounded-xl -rotate-6 h-[35vh] w-auto" />
      </div>
      <div id="heading" className="w-1/2 flex flex-col gap-10">
        <div>
          <h2 className="font-extrabold text-9xl">DIRECTED</h2>
          <p className="text-6xl">BY</p>
          <h2 className="font-extrabold text-7xl">JONATHAN WATTS</h2>
        </div>
        <div id="para">
          <p>
            NO WAY HOME WAS RELEASED IN THE UNITED STATES ON DECEMBER 17, 2021.
            IT FOLLOWS PETER PARKER AS HE SEEKS HELP FROM DOCTOR STRANGE TO
            RESTORE HIS SECRET IDENTITY, LEADING TO A MULTIVERSE COLLISION THAT
            CHANGES HIS WORLD FOREVER
          </p>
        </div>
      </div>
    </div>
  )
}
