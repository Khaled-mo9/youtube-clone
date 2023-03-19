import React from 'react'
import HomeVideos from '../Components/HomeVideos.jsx'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import './Home.css'
const Home = () => {
  return (
    <div className=''>
      <div className='flex'>
        <div className=''>
          <Sidebar />
        </div>
        <div className=''>
          <HomeVideos />
        </div>
      </div>
    </div>
  )
}

export default Home