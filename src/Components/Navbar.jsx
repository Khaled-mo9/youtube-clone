import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./../channels4_profile.jpg";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearched } from "../Store/GetSearchItems";
import { handleSideShow } from "../Store/GetHomeVideosSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const [val, setVal] = useState(null);
  const handelSearch = () => {
    if (searchRef.current.value.length > 0) {
      dispatch(getSearched(searchRef.current.value));
      navigate("/search");
    }
  };

  const show = useSelector((state) => state.homeVideos.show);

  const [showSearch, setShowSearch] = useState(true);

  return (
    <div className="flex justify-between items-center w-full text-white px-6 h-14 bg-[#181818]  sticky top-0 z-[100]">
      {showSearch && (
        <>
          {/* icon -- youtube */}
          <div className="flex space-x-8 w-2/12 items-center">
            <div
              className="hover:bg-[#373737] p-2 hover:rounded-full"
              onClick={() => dispatch(handleSideShow())}
            >
              <GiHamburgerMenu className="text-2xl cursor-pointer" />
            </div>
            <div className="flex items-center space-x-1 relative" 
            onClick={()=>navigate("/")}
            >
              <BsYoutube className="text-3xl text-red-600 relative top-px cursor-pointer" />
              <span className=" text-2xl cursor-pointer  ">Youtube</span>
              <span className="absolute text-[10px] font-bold -right-3 text-darkGrayishBlue -top-[2px]">
                EG
              </span>
            </div>
          </div>
          {/* search */}
          <div className="flex items-center mt-1 w-8/12 space-x-2">
            <div className="flex justify-center w-full">
              <input
                type="text"
                ref={searchRef}
                placeholder="Search"
                onChange={(e) => setVal(e.target.value)}
                className="bg-transparent border-2 border-[#373737] w-7/12 rounded-2xl  rounded-r-none pl-4 py-1 hidden lg:block  outline-none focus:border-[#3EA6ff]"
              />
              <div className="sm:bg-[#373737] py-2 hidden lg:block pr-4 pl-3 rounded-2xl rounded-l-none">
                <AiOutlineSearch
                  className="text-2xl cursor-pointer"
                  onClick={() => handelSearch()}
                />
              </div>
              <div className="hover:bg-[#373737] bg-[#141414] hidden lg:block ml-2  p-2 rounded-full">
                <TiMicrophone className="text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
          {/* logo and other icons */}
          <div className="flex items-center justify-end w-6/12 lg:w-2/12 space-x-6">
            <div className="sm:hover:bg-[#373737] flex items-center justify-center lg:hidden p-2 rounded-full">
              <AiOutlineSearch
                className="text-2xl cursor-pointer"
                onClick={() => setShowSearch(false)}
              />
            </div>
            <div className="hover:bg-[#373737] bg-[#141414] hidden sm:block lg:hidden  p-2 rounded-full">
              <TiMicrophone className="text-2xl cursor-pointer" />
            </div>
            <BsCameraVideo className="text-xl cursor-pointer hidden lg:block " />
            <BsBell className="text-xl cursor-pointer hidden lg:block " />
            <span className="rounded-full w-8 font-bold h-8 bg-[#141414] flex justify-center items-center">K</span>
          </div>
        </>
      )}

      {!showSearch && (
        <div className="grid grid-cols-12 items-center lg:hidden w-full">
          {/* search */}
          <div
            className="col-span-2 sm:col-span-1"
            onClick={() => setShowSearch(true)}
          >
            <IoIosArrowRoundBack className="text-4xl cursor-pointer" />
          </div>
          <div className="flex col-span-8 sm:col-span-10 items-center justify-center mt-1">
            <div className="flex w-full justify-center">
              <input
                type="text"
                ref={searchRef}
                onChange={(e) => setVal(e.target.value)}
                placeholder="Search"
                className="bg-transparent border-2 border-[#373737] rounded-2xl w-9/12 rounded-r-none pl-4 py-1  outline-none focus:border-[#3EA6ff]"
              />
              <div className="bg-[#373737] py-2 pr-4 pl-3 rounded-2xl rounded-l-none">
                <AiOutlineSearch
                  className="text-2xl cursor-pointer"
                  onClick={() => handelSearch()}
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 flex justify-end">
            <div className="hover:bg-[#373737] bg-[#141414] w-fit  p-2 rounded-full">
              <TiMicrophone className="text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
