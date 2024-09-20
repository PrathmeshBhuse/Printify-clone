import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import Info from '../components/Info'
import Options from '../components/Options'
import Store from '../components/Store'
import Letter from '../components/Letter'
import Footer from '../components/Footer'
import Review from '../components/Review'
import Table from '../components/Table'
import Navbar2 from '../components/Navbar2'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <Features/>
      <Info/>
      <Options/>
      {/* <Store/> */}
      <Letter/>
      <Review/>
      <Footer/>
      <Table/>
      <Navbar2/>
    </div>
  )
}

export default Homepage
