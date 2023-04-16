import React, { useEffect } from 'react'
import Airpods from '../images/airpods.png'
import AirpodsFoam from '../images/airpods-foam.jpeg'
import Image from 'next/image'
import { gsap,Power2 } from 'gsap'

function Hero() {

    useEffect(()=>{
        const tl = gsap.timeline()

        // Animations

        gsap.fromTo(".airpods",
        {
            y:-500
        },
        {
            y:0
        })
        gsap.to(".airpods",
        {
            width:400,
            height:450,
            rotateY:360,
            duration:2.5,
            ease:Power2.easeOut

        })
        gsap.fromTo(".airpods-foam",
        {
            x:"-20vw"
        },
        {
            x:0,
            duration:2.5,
            ease:Power2.easeOut

        })
        gsap.fromTo(".airpods-green",
        {
            x:"80vw"
        },
        {
            x:0,
            duration:2.5,
            ease:Power2.easeOut
        })
    })

  return (
    <main className='max-w-[1600px] mx-auto p-5'>
        <section className='w-full lg:h-[500px] bg-[#f5f5f7] rounded-md overflow-hidden p-5 flex flex-col-reverse lg:flex-row justify-around items-center'>
            <section className='lg:w-[50%]'>
                <h1 className='text-5xl'><span className='text-xl'>Audio Quality?</span> <br />Sounds like an epiphany.</h1>
                <p className='my-3'>Introducing AirPods Max — a perfect balance of exhilarating high-fidelity audio and the efforgsapess magic of AirPods. 
                    The ultimate personal listening experience is here.</p>
            </section>
            <section>
                <Image src={Airpods} alt="airpods" className='airpods' />
            </section>
        </section>

        {/* Grid of Sections */}
        <section className="grid lg:grid-cols-4 gap-5 my-3">
            <section className='col-span-4 lg:col-span-1 h-[400px] rounded-md overflow-hidden bg-[#f5f5f7]'>
                <Image src={AirpodsFoam} alt="airpods" className='airpods-foam w-full object-cover'/>
            </section>
            <section className='col-span-4 lg:col-span-3 bg-[#1d1d20] text-white h-[400px] rounded-md p-5 relative overflow-hidden'>
                <p className='absolute text-3xl z-[1]'>Crafted with acoustically engineered memory foam, the ear cushions gently 
                create an immersive seal that is the foundation of incredible sound.</p>
                <img src="https://www.apple.com/v/airpods-max/e/images/overview/audio_quality_noise_cancellation__bly3c9di4wwi_xlarge.jpg" alt="airpods-green" 
                className='absolute right-0 airpods-green'/>
            </section>
        </section>
    </main>
  )
}

export default Hero