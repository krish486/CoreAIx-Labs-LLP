import React from 'react'
import Navbar from './Features/Dashboard/UI/Components/Navbar'
import LandingPage from './Features/Dashboard/UI/Components/HomeScreen/LandingPage'

const App = () => {
  return (
    <div className='h-screen bg-[#F9F8F4]'>
      <Navbar />
      <LandingPage />
    </div>
  )
}

export default App
