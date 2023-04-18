import React, { useState } from "react";
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
  MdArrowDropDown,
  MdArrowDropUp,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2, TbBrandYoutube } from "react-icons/tb";
import { FaMusic, FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";
import { AiFillYoutube } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";

import logo from "./../channels4_profile.jpg";

const Sidebar = () => {
  const [clicked, setClicked] = useState(false);
  const change = () => {
    setClicked(!clicked);
  };

  const styleImg = "w-8 h-8 roundefull";
  const HorizpntalLine = "my-3 w-full h-px bg-[#888]";

  const mainLinks = [
    {
      icon: <MdHomeFilled className="text-2xl" />,
      name: "Home",
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-2xl" />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions className="text-2xl" />,
      name: "Subscriptions",
    },
  ];

  const secLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-2xl" />,
      name: "Library",
    },
    {
      icon: <MdHistory className="text-2xl" />,
      name: "History",
    },
    {
      icon: <MdOutlineSmartDisplay className="text-2xl" />,
      name: "Your Videos",
    },
    {
      icon: <MdOutlineWatchLater className="text-2xl" />,
      name: "Watch Later",
    },
    {
      icon: <MdThumbUpOffAlt className="text-2xl" />,
      name: "Liked Videos",
    },
  ];

  const subscriptionLinks = [
    {
      img: <img className={styleImg} src={logo} />,
      name: "Khaled Mohamed",
    },
    {
      img: <img className={styleImg} src={logo} />,
      name: "Khaled Mohamed",
    },
    {
      img: <img className={styleImg} src={logo} />,
      name: "Khaled Mohamed",
    },
    {
      img: <img className={styleImg} src={logo} />,
      name: "Khaled Mohamed",
    },
    {
      img: <img className={styleImg} src={logo} />,
      name: "Khaled Mohamed",
    },
    {
      img: <img className={styleImg} src={logo} />,
      name: "Khaled Mohamed",
    },
  ];

  const expolreLinks = [
    {
      icon: <MdOutlineSlowMotionVideo className="text-2xl" />,
      name: "Trending",
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-2xl" />,
      name: "Music",
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-2xl" />,
      name: "Live",
    },
    {
      icon: <TbDeviceGamepad2 className="text-2xl" />,
      name: "Gaming",
    },
    {
      icon: <MdOutlineSportsVolleyball className="text-2xl" />,
      name: "Sport",
    },
  ];

  const otherLinks = [
    {
      icon: <AiFillYoutube className="text-2xl text-red-800" />,
      name: "YouTube Premium",
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-2xl text-red-800" />,
      name: "Creator Studio",
    },
    {
      icon: <FaMusic className="text-2xl text-red-800" />,
      name: "Youtube Music",
    },
    {
      icon: <TiSocialYoutubeCircular className="text-2xl text-red-800" />,
      name: "Youtube Kids",
    },
    {
      icon: <TbBrandYoutube className="text-2xl text-red-800" />,
      name: "Youtube TV",
    },
  ];

  const settingLinks = [
    {
      icon: <MdSettings className="text-2xl" />,
      name: "Setting",
    },
    {
      icon: <MdOutlinedFlag className="text-2xl" />,
      name: "Report History",
    },
    {
      icon: <MdOutlineHelpOutline className="text-2xl" />,
      name: "Help",
    },
    {
      icon: <MdOutlineFeedback className="text-2xl" />,
      name: "Send Feedback",
    },
  ];

  const mainLinksItems = mainLinks.map((item) => {
    return (
      <div
        className="text-white p-2 first:bg-[#ffffff14] cursor-pointer
         hover:bg-[#ffffff50] rounded flex flex-col xl:space-x-4 items-center xl:flex-row"
        key={item.name}
      >
        {item.icon}
        <span className="text-[10px] lg:text-sm">{item.name}</span>
      </div>
    );
  });

  const secLinksItems = secLinks.map((item) => {
    return (
      <div
        className="text-white hidden xl:flex cursor-pointer hover:bg-[#ffffff50] p-2 rounded  space-x-4 items-center"
        key={item.name}
      >
        {item.icon}
        <span className="text-sm">{item.name}</span>
      </div>
    );
  });

  // const subscriptionItems = subscriptionLinks.map((item) => {
  //   return (
  //     <div
  //       className="flex space-x-4 cursor-pointer items-center hover:bg-[#ffffff50] p-2 rounded"
  //       key={Math.random()}
  //     >
  //       <img className={styleImg} src={logo} />
  //       <span className="text-sm">{item.name}</span>
  //     </div>
  //   );
  // });

  const exploreItems = expolreLinks.map((item) => {
    return (
      <div
        className="text-white cursor-pointer hover:bg-[#ffffff50] p-2 rounded flex space-x-4 items-center"
        key={item.name}
      >
        {item.icon}
        <span className="text-sm">{item.name}</span>
      </div>
    );
  });

  const otherItems = otherLinks.map((item) => {
    return (
      <div
        className="text-white cursor-pointer hover:bg-[#ffffff50] p-2 rounded flex space-x-4 items-center"
        key={item.name}
      >
        {item.icon}
        <span className="text-sm">{item.name}</span>
      </div>
    );
  });

  const settingItems = settingLinks.map((item) => {
    return (
      <div
        className="text-white cursor-pointer hover:bg-[#ffffff50] p-2 rounded flex space-x-4 align-items-center"
        key={item.name}
      >
        {item.icon}
        <span className="text-sm">{item.name}</span>
      </div>
    );
  });

  return (
    <div className="sidebar__home hidden bg-[#181818] text-sm  md:flex flex-col z-20 transition-all duration-700 overflow-x-hidden sticky top-14 pt-2 h-[calc(100vh-56px)] overflow-y-scroll  xl:pl-6 xl:pr-2">
      <div className="">
        <div className="">{mainLinksItems}</div>
        <div className="text-white hidden md:flex xl:hidden p-2 first:bg-[#ffffff14] cursor-pointer hover:bg-[#ffffff50] rounded flex-col xl:space-x-4 items-center ">
          <MdOutlineVideoLibrary className="text-2xl" />
          <span className="text-sm">Library</span>
        </div>

        <div className={`${HorizpntalLine} hidden xl:block`}></div>

        {secLinksItems}
        <div className={`${HorizpntalLine} hidden xl:block`}></div>
      </div>
      {/* <div className="text-white hidden xl:block">
        <h6>Subscriptions</h6>
        <div className="flex flex-col  space-y-2">
          {subscriptionItems}

          {clicked && <>{subscriptionItems}</>}

          <div
            className="flex items-center space-x-4 hover:bg-[#ffffff50] p-2 rounded"
            onClick={() => {
              change();
            }}
          >
            {!clicked ? (
              <MdArrowDropDown className="text-xl" />
            ) : (
              <MdArrowDropUp className="text-xl" />
            )}
            <span className="text-sm">
              {!clicked ? "Show 15 More" : "Show Less"}
            </span>
          </div>
        </div>
      </div> */}
      <div className={`${HorizpntalLine} hidden xl:block`}></div>
      <div className="hidden xl:block">
        <h6 className="text-white">Explore</h6>
        {exploreItems}
      </div>
      <div className={`${HorizpntalLine} hidden xl:block`}></div>

      <div className={`hidden xl:block`}>
        <h6 className="text-white">More from YouTube</h6>
        {otherItems}
      </div>
      <div className={`${HorizpntalLine} hidden xl:block`}></div>
      <div className={`${HorizpntalLine} hidden xl:block`}>
        {settingItems}

        <div className={`${HorizpntalLine} hidden xl:block`}></div>

        <div className="hidden xl:flex flex-col text-white p-2 rounded space-y-4 text-sm">
          <span className="text-secondary">
            About Press Copyright Contact us Creators Advertise Developers
          </span>
          <span className="text-secondary">
            Terms Privacy Policy & Safety How YouTube works Test new features
          </span>
          <span className="text-secondary">© 2022 Google LLC</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
