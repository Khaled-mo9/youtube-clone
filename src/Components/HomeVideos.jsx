import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "./../channels4_profile.jpg";
import Loading from "./Loading";
const HomeVideos = () => {
  const videos = useSelector((state) => state.homeVideos.videos);
  const loading = useSelector((state) => state.homeVideos.loading);

  console.log("HomeVideos", videos);

  const navigate = useNavigate();

  const handleNav = (video) => {
    navigate(`/watch/${video.id.videoId}`, { state: video });
  };

  const items = videos?.map((video) => {
    return (
      <div
        className="w-72 mt-4 mx-2 cursor-pointer"
        key={video.id.videoId}
        onClick={() => handleNav(video)}
      >
        <div className="border-0 overflow-hidden rounded-none flex flex-col space-y-2">
          <img
            src={video.snippet.thumbnails.high.url}
            className="rounded h-44 w-72"
            alt="logo"
          />
          <div className="text-white flex space-x-2">
            <img src={logo} className="rounded-full w-9 h-9 " alt="logo" />
            <div>
              <p className="w-64 mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                {video.snippet.title}
              </p>
              <span className="text-[#AAAAAAAA] text-sm">
                {video.snippet.channelTitle}
              </span>
              <div className="">
                <span className="text-[#AAAAAAAA] text-xs ">15K views</span>
                <span className="text-[#AAAAAAAA] font-bold text-md"> . </span>
                <span className="text-[#AAAAAAAA] text-xs">4 years ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-wrap justify-center mb-10">
      {!loading && <Loading dir={true} />}
      {items}
    </div>
  );
};

export default HomeVideos;
