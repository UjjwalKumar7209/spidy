'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText)
export default function Name() {
  useGSAP(() => {
    const splitText = SplitText.create('#name h1', {type: 'chars'})
    const st2 = SplitText.create('#name p', {type: 'words'})
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#name',
            start: 'top-=500 top',
            end: '+=300',
            scrub: true
        }
    })

    tl.fromTo(splitText.chars, {
        color: '#6b7280',
    }, {
        color: 'white',
        stagger: 0.2,
        ease: 'none'
    }).fromTo(st2.words, {
        color: '#6b7280',
    }, {
        color: 'white',
        stagger: 0.2,
        ease: 'none'
    })
  })
  return (
    <div id="name" className="flex flex-col gap-10 justify-center items-center my-10">
      <h1 className="tracking-widest text-9xl font-extrabold">
        SPIDER-MAN
      </h1>
      <p className="w-1/2 text-xl text-gray-400 text-center">Spider-Man is a fictional superhero appearing in American comic books published by Marvel Comics. He was created by the writer Stan Lee and artist Steve Ditko. He first appeared in Amazing Fantasy #15 in August 1962. He was an orphan being raised by his Aunt May and Uncle Ben as an ordinary teenager. He would deal with the normal struggles of being young as well as the struggles of being a costumed crime fighter.
      Spider-Man first appeared in the early 1960s, when teenagers in superhero comic books were usually only sidekicks to the protagonist. The series featured Peter Benjamin Parker, a high school student who frequently suffered rejection, inadequacy, and loneliness. Most young readers could easily relate to this.[8]: 210  Unlike some teen heroes, such as Bucky and Robin, Spider-Man never had any adult mentors like Captain America and Iron Man to teach him to be a superhero. He had to learn for himself that &quot;with great power comes great responsibility&quot; (Later comics had him learn that quote from his late Uncle Ben.)



</p>
    </div>
  )
}
