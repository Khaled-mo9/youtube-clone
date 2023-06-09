import React from 'react'
import Navbar from '../Components/Navbar'
import SearchCard from '../Components/SearchCard'
import Sidebar from '../Components/Sidebar'

const Search = () => {
  
  return (
    <div className="">
      {/* <Navbar /> */}
      <div className="grid grid-cols-12">
        <div className="md:col-span-1 xl:col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-12 md:col-span-11 xl:col-span-10">
          <SearchCard />
        </div>
      </div>
    </div>
  );
}

export default Search