import Navbar from '@/assets/components/Navbar'
import Features from '@/assets/page-sections/Features'
import Hero from '@/assets/page-sections/Hero'
import MoreFeatures from '@/assets/page-sections/MoreFeatures'
import Head from 'next/head'
import React from 'react'

function index() {
  return (
    <>
      <Head>
        <title>Airpods Max</title>
        <meta name="title" content="Airpods Max" />
        <meta name="description" content="Airpods Max" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar/>
        <Hero/>
        <Features/>
        <section className="bg-black">
        <MoreFeatures/>
        </section>
      </main>
    </>
  )
}

export default index