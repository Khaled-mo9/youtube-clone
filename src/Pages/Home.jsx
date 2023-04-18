import React, { useEffect } from "react";
import HomeVideos from "../Components/HomeVideos.jsx";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getChannelDetails } from "../Store/GetHomeVideosSlice.jsx";
const Home = () => {
  const { videos, loading } = useSelector((state) => state.homeVideos);

  return (
    <div className="">
      <div className="grid grid-cols-12">
        <div className="md:col-span-1 xl:col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-12 md:col-span-11 xl:col-span-10">
          <HomeVideos videos={videos} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Home;
