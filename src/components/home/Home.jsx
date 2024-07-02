import React from 'react'
import HeroSection from '../hero/HeroSection'
import Catergories from '../categories/Catergories'
import FaqSection from '../faqSection/FaqSection'
import HeroBanner from '../hero/HeroBanner'
import TopSelling from '../categories/TopSelling'
const Home = () => {
  return (
    <div className='bg-gray-50'>
        <HeroSection/>
        <Catergories/>
        <HeroBanner/>
        <TopSelling/>
        <FaqSection/>
    </div>
  )
}

export default Home