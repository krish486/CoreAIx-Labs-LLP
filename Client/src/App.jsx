import React from 'react'
import Navbar from './Features/Dashboard/UI/Components/Navbar'
import LandingPage from './Features/Dashboard/UI/Components/HomeScreen/LandingPage'
import CollabPage from './Features/Dashboard/UI/Components/HomeScreen/CollabPage'

const App = () => {
  return (
    <div className='h-screen bg-[#F9F8F4]'>
      <Navbar />
      <LandingPage />
      <CollabPage />
    </div>
  )
}

export default App
