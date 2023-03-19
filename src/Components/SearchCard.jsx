import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "./../channels4_profile.jpg";
import Loading from "./Loading";

const SearchCard = () => {
  const videos = useSelector((state) => state.search.videos);
  const loading = useSelector((state) => state.search.loading);

  const options = {
    year: "numeric",
    month: "long",
    //  day: "numeric",
  };
  // console.log('HomeVideos', videos);

  const navigate = useNavigate();

  const handleNavigate = (video) => {
    navigate(`/search/watch/${video.id.videoId}`, { state: video });
  };

  const items = videos?.map((video) => {
    return (
      <div
        className="w-5/6 mt-4 mx-4 cursor-pointer overflow-hidden"
        key={video.id.videoId}
        onClick={() => handleNavigate(video)}
      >
        <div className="border-0 rounded-none flex flex-col smd:flex-row space-x-4 space-y-2">
          <img
          width={320}
          height={210}
            src={video.snippet.thumbnails.high.url}
            className="rounded"
            alt="logo"
          />
          <div className="text-white flex space-x-2">
            <div className="space-y-2">
              {/* title */}
              <p className="w-full m-0">{video.snippet.title}</p>
              {/* views and date */}
              <div className="">
                <span className="text-[#AAAAAAAA] text-xs ">15K views</span>
                <span className="text-[#AAAAAAAA] text-sm font-bold"> . </span>
                <span className="text-[#AAAAAAAA] text-xs">
                  {new Date(video.snippet.publishedAt).toLocaleDateString(
                    undefined,
                    options
                  )}
                </span>
              </div>
              {/* channle title and logo */}
              <div className="flex space-x-2 items-center">
                <img src={logo} className="rounded-full w-8 h-8 " alt="logo" />
                <span className="text-xs text-[#AAAAAAAA]">
                  {video.snippet.channelTitle}
                </span>
              </div>
              <p className=" smd:w-4/5 hidden smd:flex text-[#AAAAAAAA] text-sm">
                {video.snippet.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col ">
      {!loading && <Loading dir={false} />}
      {items}
    </div>
  );
};

export default SearchCard;
