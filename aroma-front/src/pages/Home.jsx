import React from 'react'
import BestSeller from '../components/bestSeller/BestSeller'
import HeroSection from '../components/HeroSection/HeroSection'
import Sale from '../components/Sale/Sale'
import Trending from '../components/Trending/Trending'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <Trending/>
    <Sale/>
    <BestSeller/>
    
    </>
  )
}

export default Home