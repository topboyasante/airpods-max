import { CSSPlugin, gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'

function Features() {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger,CSSPlugin)

        const tl = gsap.timeline(
            {
                scrollTrigger:{
                    trigger:".feature-container",
                    scrub:0.6,
                    start:"top 90%",
                }
            }
        )

        tl.fromTo(".feature-container",
        {
          clipPath: "circle(0%)"
        },
        {
          clipPath:'circle(100%)'
        }
      )
    })
  return (
   <main className='w-full h-[100vh] relative'>
        <div className="feature-container w-screen h-full absolute top-0 left-0 text-white">
            <section className='flex justify-center items-center h-[100vh]'>
                <h1 className='text-xl lg:text-3xl lg:w-[70%] text-center p-3'>Personalized Spatial Audio with dynamic head tracking gives you a theater‑like experience for movies and shows, with sound that surrounds you.
                    Using built-in gyroscopes and accelerometers, AirPods Max and your iPhone, iPad, Mac, or Apple TV track the subtle motion of your head, anchoring sounds 
                    to your device.And with Apple Music, Personalized Spatial Audio with dynamic head tracking places sound all around you to create a three-dimensional 
                    listening experience.
                </h1>
            </section>
        </div>
   </main>
  )
}

export default Features