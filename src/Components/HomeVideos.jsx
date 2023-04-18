import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "./../channels4_profile.jpg";
import Loading from "./Loading";
import { getChannelDetails, getComments } from "../Store/GetHomeVideosSlice";
import moment from "moment/moment";
const HomeVideos = ({ videos, img }) => {
  // const videos = useSelector((state) => state.homeVideos.videos);
  const loading = useSelector((state) => state.homeVideos.loading);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("HomeVideos", videos);

  const handleNav = (video) => {
    navigate(`/watch/${video.id.videoId}`, { state: video });
  };
  const handlePlaylistActions = (channelId) => {
    dispatch(getChannelDetails(channelId));
    navigate("/playlist");
  };

  const items = videos?.map((video) => {
    return (
      <div
        className="col-span-12 smd:col-span-6 lg:col-span-4  mt-4 mx-2 relative z-50"
        key={video.id.videoId}
      >
        <div className="border-0 overflow-hidden rounded-none flex flex-col space-y-2">
          <div
            className="relative cursor-pointer"
            onClick={() => handleNav(video)}
          >
            {/* <span className="w-full h-[40px] bg-[#181818] absolute z-0 bottom-0"></span> */}
            <img
              src={video.snippet.thumbnails.high.url}
              className="rounded w-full"
              alt="logo"
            />
          </div>
          {/* -top-8 relative */}
          <div className="text-white  z-50 flex space-x-2 ">
            <img
              src={img || video.snippet.thumbnails.high.url}
              className="rounded-full w-9 h-9"
              alt="logo"
            />
            <div>
              <p className="mt-1 line-clamp-2">{video.snippet.title}</p>
              <span
                className="text-[#AAAAAAAA] hover:text-white transition-all text-sm cursor-pointer"
                onClick={() => handlePlaylistActions(video.snippet.channelId)}
              >
                {video.snippet.channelTitle}
              </span>
              <div className="">
                <span className="text-[#AAAAAAAA] text-xs ">15K views</span>
                <span className="text-[#AAAAAAAA] font-bold text-md"> . </span>
                <span className="text-[#AAAAAAAA] text-xs">
                  {moment(video.snippet.publishedAt).fromNow()}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <span className="w-full h-[40px] bg-[#181818] absolute top-0 z-0 rounded-tl-none rounded-tr"></span> */}
      </div>
    );
  });

  return (
    <div className="mb-10">
      {!loading && <Loading dir={true} />}
      <div className="grid grid-cols-12 gap-2 ">{items}</div>
    </div>
  );
};

export default HomeVideos;
