import React from 'react'
import Navbar from '../Components/Navbar'
import SearchCard from '../Components/SearchCard'
import Sidebar from '../Components/Sidebar'

const Search = () => {
  
  return (
    <div className=''>
      {/* <Navbar /> */}
      <div className='flex'>
        <div className=''>
          <Sidebar />
        </div>
        <div className=''>
          <SearchCard  />
        </div>
      </div>
    </div>
  )
}

export default Search