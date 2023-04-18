import React, { useEffect, useState } from "react";
import logo from "./../channels4_profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getChannelVideos } from "../Store/GetHomeVideosSlice";
import HomeVideos from "./HomeVideos";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import About from "./About";

const PlaylistFeed = () => {
  const [activeItem, setActiveItem] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activelI =
    "border-b text-white transition-all duration-700  pb-2 w-20 text-center cursor-pointer hover:text-white transition-all duration-700";

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  const { videoComment, channelDetails, channelVideos } = useSelector(
    (state) => state.homeVideos
  );

  useEffect(() => {
    dispatch(getChannelVideos(channelDetails[0]?.id));
  }, [channelDetails, dispatch]);

  console.log("channelDetails", channelDetails);
  console.log("channelVideos", channelVideos);

  const handleNavs = (id) => {
    handleItemClick(6);
    // navigate(`/${id}/about`, {replace: true});
  };

  return (
    <div>
      <div className="text-white space-y-12">
        {/* cover image */}
        <div>
          <img
            src={channelDetails[0]?.brandingSettings.image.bannerExternalUrl}
            alt=""
            width={"100%"}
            className="max-h-60 object-cover"
          />
        </div>
        {/* channel description */}
        <div className="flex justify-between items-center px-4 md:px-8 xl:px-32">
          <div className="flex flex-col items-center md:flex-row  space-y-2 md:space-x-4">
            {/* profile image */}
            <div>
              <img
                src={channelDetails[0]?.snippet.thumbnails.high.url}
                alt=""
                className="rounded-full w-24 h-24 lg:w-32 lg:h-32"
              />
            </div>
            {/* content */}
            <div className="md:w-2/4 space-y-4 flex flex-col items-center md:items-start">
              <h2 className="text-xl">{channelDetails[0]?.snippet.title}</h2>
              <div className="flex space-x-2 text-sm text-[#AAAAAA]">
                <span>{channelDetails[0]?.snippet.customUrl}</span>
                <span>
                  {channelDetails[0]?.statistics.subscriberCount} subscribers
                </span>
                <span>{channelDetails[0]?.statistics.videoCount} videos</span>
              </div>
              <div
                className="flex items-start relative cursor-pointer"
                onClick={() => handleNavs(channelDetails[0]?.snippet.customUrl)}
              >
                <p className="line-clamp-2 lg:line-clamp-1 text-sm text-[#AAAAAA]">
                  {channelDetails[0]?.snippet.description}
                </p>
                <MdKeyboardArrowRight className="absolute -right-4 text-2xl" />
              </div>
              <button className=" bg-white w-full block md:hidden text-[#0f0f0f] h-fit font-medium text-sm rounded-3xl py-2">
                Subscribe
              </button>
            </div>
          </div>
          <button className=" bg-white hidden md:block text-[#0f0f0f] h-fit font-medium text-sm rounded-3xl px-3 py-2">
            Subscribe
          </button>
        </div>
        {/* navs */}
        <div>
          <ul
            className="text-[#AAAAAA] text-base border-b px-4 md:px-8 xl:px-32
           border-[#AAAAAA] font-bold flex space-x-8 z-30 transition-all duration-700 w-full
           overflow-x-scroll playlist
           "
          >
            <li
              className={
                activeItem === 1
                  ? activelI
                  : " pb-2 w-20 text-center cursor-pointer hover:text-white transition-all duration-700"
              }
              onClick={() => handleItemClick(1)}
            >
              Home
            </li>
            {/* <li
              className={
                activeItem === 2
                  ? activelI
                  : " pb-2 w-20 text-center cursor-pointer hover:text-white transition-all duration-700"
              }
              onClick={() => handleItemClick(2)}
            >
              Videos
            </li>
            <li
              className={
                activeItem === 3
                  ? activelI
                  : " pb-2 w-20 text-center cursor-pointer hover:text-white transition-all duration-700"
              }
              onClick={() => handleItemClick(3)}
            >
              Playlist
            </li>
            <li
              className={
                activeItem === 4
                  ? activelI
                  : " pb-2 w-20 text-center cursor-pointer hover:text-white transition-all duration-700"
              }
              onClick={() => handleItemClick(4)}
            >
              Community
            </li>
            <li
              className={
                activeItem === 5
                  ? activelI
                  : " pb-2 w-20 text-center cursor-pointer hover:text-white transition-all duration-700"
              }
              onClick={() => handleItemClick(5)}
            >
              Channels
            </li> */}
            <li
              className={
                activeItem === 6
                  ? activelI
                  : " pb-2 w-20 text-center cursor-pointer hover:text-white transition-all duration-700"
              }
              onClick={() => handleItemClick(6)}
            >
              About
            </li>
          </ul>
        </div>
      </div>
      {activeItem === 1 ? (
        <HomeVideos
          videos={channelVideos}
          img={channelDetails[0]?.snippet.thumbnails.high.url}
        />
      ) : (
        <About
          snippet={channelDetails[0]?.snippet}
          stats={channelDetails[0]?.statistics}
        />
      )}
    </div>
  );
};

export default PlaylistFeed;
