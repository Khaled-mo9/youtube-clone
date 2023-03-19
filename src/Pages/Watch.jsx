import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../Components/Sidebar";
import WatchVid from "../Components/WatchVid";

const Watch = () => {
  const show = useSelector((state) => state.homeVideos.show);

  return (
    <div className="">
      {/* <Navbar /> */}
      <div className="flex">
        <div className="z-50">{!show && <Sidebar />}</div>
        <div className={"z-10"}>
          <WatchVid />
        </div>
      </div>
    </div>
  );
};

export default Watch;
