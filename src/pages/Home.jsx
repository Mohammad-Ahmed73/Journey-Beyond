import React from 'react'
import Banner from '../components/Banner'
import HomeLeftContentImage from '../components/HomeLeftContentImage'
import FAQ from '../components/FAQ'
import WhyJourneyBound from '../components/WhyJourneyBound'

function Home() {
  return (
    <>
        <Banner />
        <HomeLeftContentImage/>
        <WhyJourneyBound />
        <FAQ />
    </>
  )
}

export default Home
