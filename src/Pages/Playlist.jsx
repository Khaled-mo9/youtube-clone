import React from "react";
import PlaylistFeed from "../Components/PlaylistFeed";
import Sidebar from "../Components/Sidebar";

const Playlist = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12">
        <div className="md:col-span-1 xl:col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-12 md:col-span-11 xl:col-span-10">
          <PlaylistFeed />
        </div>
      </div>
    </div>
  );
};

export default Playlist;
