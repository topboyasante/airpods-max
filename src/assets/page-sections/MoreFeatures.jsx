import React from 'react'

function MoreFeatures() {
  return (
    <main className='max-w-[1600px] mx-auto h-full p-5'>
        <section className='grid gap-5 lg:grid-cols-4'>
            <section className='lg:col-span-1 h-[400px] rounded-md overflow-hidden'>
                <img src="https://www.apple.com/v/airpods-max/e/images/overview/audio_quality_eq__bw20hke6z1ea_xlarge.jpg" alt="airpods"
                className='rounded-md w-full'/>
            </section>
            <section className="lg:col-span-3 h-[400px] bg-[#121212] rounded-md text-white p-5 flex  justify-center items-center">
                <p className='lg:w-[70%] text-2xl lg:text-3xl xl:text-4xl'>
                Industry‑leading Active Noise Cancellation counters external sound with equal anti‑noise, allowing you to immerse yourself in what you’re listening to.
                Press the noise control button to switch to Transparency mode, which lets outside sound in so you can interact naturally with your surroundings.</p>
            </section>
        </section>
    </main>
  )
}

export default MoreFeatures