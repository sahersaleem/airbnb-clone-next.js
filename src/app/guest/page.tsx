import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SecondNavBar from '../components/SecondNavBar'
const page = () => {
  return (
    <div className="w-full">
      <Navbar/>
      <SecondNavBar/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default page
