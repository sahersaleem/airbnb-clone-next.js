import React from 'react'
import Navbar from '../../app/components2/DetailPageNavbar'
import HeroSection from '../components2/HeroSection'
import ThirdSection from '../components2/ThirdSection'
import CommentSectionPage from '../components2/CommentSection'
import Host from '../components2/Host'
import Footer from '../components/Footer'
const page = () => {
  return (
    <div>
  <Navbar/>
  <HeroSection/>
  <ThirdSection/>
  <CommentSectionPage/>
  <Host/>
  <Footer/>
    </div>
  )
}

export default page
