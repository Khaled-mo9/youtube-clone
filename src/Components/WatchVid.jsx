import React, { useEffect, useRef, useState } from "react";
import logo from "../../src/channels4_profile.jpg";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineContentCut, MdPlaylistAdd } from "react-icons/md";
import { BiDislike, BiLike } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsFlag } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import SearchCard from "../Components/SearchCard";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
import {
  getChannelDetails,
  getComments,
  handleSideShow,
  setShowSide,
} from "../Store/GetHomeVideosSlice";
import moment from "moment";
const WatchVid = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showDescriptions, setShowDescriptions] = useState(false);
  const [showAddComment, setShowAddComment] = useState(false);
  const [showAddReply, setShowAddReply] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  const [lenOne, setLenOne] = useState(0);
  const [lenTwo, setLenTwo] = useState(0);
  const commentInput = useRef(null);

  const { state } = useLocation();
  const videos = useSelector((state) => state.homeVideos.videos);
  const dispatch = useDispatch();

  const handleOnChanheComment = (e) => {
    setLenOne(e.target.value.length);
  };

  const handleOnChanheReply = (e) => {
    setLenTwo(e.target.value.length);
  };

  const handleReplyComment = () => {
    setShowAddReply(!showAddReply);
    commentInput.current.focus();
  };

  const handleNav = (video) => {
    navigate(`/watch/${video.id.videoId}`, { state: video });
  };

  useEffect(() => {
    dispatch(setShowSide(true));
  }, [dispatch]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [state]);

  const vids = [];
  for (let i = 0; i < videos.length; i++) {
    vids.push(
      <div
        className="flex smd:flex-row flex-col space-x-2 cursor-pointer"
        key={i + 1}
        onClick={() => handleNav(videos[i])}
      >
        <img
          width={168}
          height={94}
          src={videos[i].snippet.thumbnails.high.url}
          className=" rounded-md"
          alt=""
        />
        <div className="flex flex-col">
          <span className="mb-2 text-sm line-clamp-2 font-medium text-[#f1f1f1]">
            {videos[i].snippet.title}
          </span>
          <span className="mb-2 text-xs text-[#AAAAAA] font-medium">
            {videos[i].snippet.channelTitle}
          </span>
          <div className="text-xs text-[#AAAAAA] font-medium space-x-2">
            <span>2M Views</span>
            <span className="font-extrabold">.</span>
            <span>10 days ago</span>
          </div>
        </div>
      </div>
    );
  }

  const [scrennWidth, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const { videoComment, channelDetails } = useSelector(
    (state) => state.homeVideos
  );

  useEffect(() => {
    dispatch(getChannelDetails(state.snippet.channelId));
    dispatch(getComments(`${state.id.videoId}`));
  }, [state, dispatch]);

  const commentItems =
    videoComment &&
    videoComment?.map((comment, i) => {
      return (
        <div className="flex space-x-4" key={i}>
          <img
            src={
              comment.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
            }
            alt="logo"
            width={40}
            height={40}
            className="rounded-full h-fit"
          />
          <div className="">
            <span className="text-[13px] mr-2 inline-block">
              {comment.snippet?.topLevelComment?.snippet.authorDisplayName}
            </span>
            <span className="text-xs text-[#AAAAAA]">
              {comment.snippet?.topLevelComment?.snippet.publishedAt}
            </span>
            <p className="text-sm line-clamp-3">
              {comment.snippet?.topLevelComment?.snippet.textDisplay}
            </p>
            <div className="flex items-center mb-2 space-x-4">
              <span className="flex space-x-2 items-center cursor-pointer">
                <BiLike className="text-2xl" />
                <span className="text-[#AAAAAA] text-sm">
                  {comment.snippet?.topLevelComment?.snippet.likeCount}
                </span>
              </span>
              <span className="flex space-x-2 items-center cursor-pointer">
                <BiDislike className="text-2xl" />
                <span className="text-[#AAAAAA] text-sm">0</span>
              </span>
              <button
                className="hover:bg-[#373737] p-2 px-3 text-sm rounded-2xl transition-all"
                onClick={() => handleReplyComment()}
              >
                Reply
              </button>
            </div>
            {/* add reply */}
            {showAddReply && (
              <div className="flex flex-col space-y-3 mb-2">
                <div className="flex space-x-4">
                  <img
                    src={logo}
                    alt="logo"
                    width={24}
                    height={24}
                    className="rounded-full h-fit"
                  />
                  <input
                    ref={commentInput}
                    onChange={(e) => handleOnChanheReply(e)}
                    type="text"
                    placeholder="Add a comment..."
                    className="outline-none border-b-2 w-full border-[#AAAAAA] focus:border-white transition-all placeholder:text-[#AAAAAA] bg-transparent"
                  />
                </div>
                <div className="flex space-x-4 justify-end">
                  <button
                    className="hover:bg-[#373737] p-2 px-3 rounded-2xl transition-all"
                    onClick={() => handleReplyComment(!showAddReply)}
                  >
                    Cancel
                  </button>
                  <button
                    className={
                      lenTwo > 0
                        ? "bg-[#3EA6ff] p-2 px-3 rounded-2xl text-black transition-all"
                        : "bg-[#343333] p-2 px-3 rounded-2xl text-[#AAAAAA]"
                    }
                  >
                    Reply
                  </button>
                </div>
              </div>
            )}
            {/* <div
              className="flex ml-2 font-medium items-center space-x-4 cursor-pointer hover:bg-[#065fd4] rounded-2xl p-2 px-3 w-fit text-[#3EA6ff]"
              onClick={() => setShowReplies(!showReplies)}
            >
              {!showReplies && <IoMdArrowDropdown className="text-2xl" />}
              {showReplies && <IoMdArrowDropup className="text-2xl" />}
              <span className="text-sm">2 replies</span>
            </div> */}
            {/* replies------------------------------------------------------------------------------- */}
          </div>
        </div>
      );
    });
  console.log("commentItems", videoComment);
  console.log("channelDetails", channelDetails[0]?.snippet.thumbnails);

  return (
    <>
      <div className="text-white px-4 py-3">
        <div className="grid grid-cols-12 gap-4">
          <div className="space-y-4 col-span-12 lg:col-span-8">
            <div className="w-full h-[40vh] md:h-[60vh] lg:h-[70vh]">
              <ReactPlayer
                width="100%"
                height="100%"
                config={{
                  file: {
                    attributes: {
                      crossOrigin: true,
                    },
                  },
                }}
                controls="true"
                url={`https://www.youtube.com/watch?v=${state.id.videoId}`}
              />
            </div>
            <div className=" space-y-4">
              {/* title ------------------------------------------------------------------------------------------------*/}
              <p className="font-semibold text-xl">{state.snippet.title}</p>
              {/* icons ------------------------------------------------------------------------------------------------*/}
              <div className="flex justify-between flex-wrap gap-y-4 items-center">
                <div className="flex space-x-4">
                  <img
                    src={
                      channelDetails[0]?.snippet.thumbnails.default.url || logo
                    }
                    alt="logo"
                    width={40}
                    height={40}
                    className="rounded-full h-fit"
                  />
                  <div className="flex w-full justify-between flex-wrap">
                    <div className="flex flex-col space-x-2">
                      <span className="text-base font-medium">
                        {state.snippet.channelTitle}
                      </span>
                      <span className="text-xs text-[#AAAAAA]">
                        9.83M subscribers
                      </span>
                    </div>
                    <button className=" bg-white  text-[#0f0f0f] h-fit font-medium text-sm rounded-3xl py-2 px-3 ml-3">
                      Subscribe
                    </button>
                  </div>
                </div>
                {/* icons */}
                <div className=" space-x-2 flex relative w-full overflow-x-scroll playlist">
                  <div className="flex cursor-pointer space-x-2 items-center text-base font-medium hover:bg-[#373737] bg-[#343333] py-2 px-3 rounded-2xl">
                    <BiLike className="text-base lg:text-xl" />
                    <span>28K</span>
                    <div className="w-px h-5 bg-white"></div>
                    <BiDislike className="text-base lg:text-xl" />
                  </div>
                  <div className="flex cursor-pointer space-x-2 items-center text-base font-medium hover:bg-[#373737] bg-[#343333] py-2 px-3 rounded-2xl">
                    <RiShareForwardLine className="text-base lg:text-xl" />
                    <span>Share</span>
                  </div>
                  <div className="flex cursor-pointer space-x-2 items-center text-base font-medium hover:bg-[#373737] bg-[#343333] py-2 px-3 rounded-2xl">
                    <MdOutlineContentCut className="text-base lg:text-xl" />
                    <span>Clip</span>
                  </div>
                  <div className="flex cursor-pointer space-x-2 items-center text-base font-medium hover:bg-[#373737] bg-[#343333] py-2 px-3 rounded-2xl">
                    <MdPlaylistAdd className="text-base lg:text-xl" />
                    <span>Save</span>
                  </div>
                  {/* <div
                    onClick={() => {
                      setShow(!show);
                    }}
                    className=" cursor-pointer flex items-center text-base font-medium md:hover:bg-[#373737] md:bg-[#343333] min-w-10 w-10 h-10 justify-center rounded-full"
                  >
                    <FiMoreHorizontal className="text-xl" />
                  </div> */}
                  {/* {show && ( */}
                  <div className="flex cursor-pointer space-x-2 items-center text-base font-medium hover:bg-[#373737] bg-[#343333] py-2 px-3 rounded-2xl">
                    <BsFlag className="text-xl" />
                    <span>Report</span>
                  </div>
                  {/* )} */}
                </div>
              </div>
              {/* card => description */}
              <div className="hover:bg-[#373737] w-full text-sm  text-[#F1F1F1] bg-[#343333] p-3 rounded-md">
                <div className="flex space-x-2 ">
                  <span>1.1M views</span>
                  <span>{moment(state.snippet.publishedAt).fromNow()}</span>
                  <span className="text-[#3EA6ff]">#3 on trending</span>
                </div>
                <p className={` ${!showDescriptions && "line-clamp-3"}`}>
                  {state.snippet.description}
                </p>
                <div className="flex space-x-1">
                  {/* <p className="text-[#3EA6ff]">#React redux | #React.JS</p> */}
                  {!showDescriptions && (
                    <button
                      className="relative -top-1"
                      onClick={() => setShowDescriptions(!showDescriptions)}
                    >
                      Show more
                    </button>
                  )}
                </div>
                {showDescriptions && (
                  <button
                    onClick={() => setShowDescriptions(!showDescriptions)}
                  >
                    Show less
                  </button>
                )}
              </div>
              {/* comments */}
              <div className="text-base space-y-4 hidden lg:block">
                {/* first row */}
                <div className="flex space-x-8 font-medium">
                  <span>731 Comments</span>
                  <div className="space-x-2 flex items-center">
                    <HiOutlineMenuAlt2 className="text-2xl" />
                    <span className="text-sm">Sorted by</span>
                  </div>
                </div>
                {/* second row */}
                <div className="flex flex-col space-y-4">
                  <div className="flex space-x-4">
                    <img
                      src={logo}
                      alt="logo"
                      width={40}
                      className="rounded-full"
                    />
                    <input
                      onFocus={() => setShowAddComment(true)}
                      onChange={(e) => handleOnChanheComment(e)}
                      type="text"
                      placeholder="Add a comment..."
                      className="outline-none border-b-2 w-full border-[#AAAAAA] focus:border-white transition-all placeholder:text-[#AAAAAA] bg-transparent"
                    />
                  </div>
                  {showAddComment && (
                    <div className="flex space-x-4 justify-end transition-all">
                      <button
                        className="hover:bg-[#373737] p-2 px-3 rounded-2xl transition-all"
                        onClick={() => setShowAddComment(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className={
                          lenOne > 0
                            ? "bg-[#3EA6ff] p-2 px-3 rounded-2xl transition-all text-black"
                            : "bg-[#343333] p-2 px-3 rounded-2xl text-[#AAAAAA]"
                        }
                      >
                        Comment
                      </button>
                    </div>
                  )}
                </div>
                {/* third row => all comments */}
                <div className="space-y-4 hidden lg:block">{commentItems}</div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 space-y-4">
            {vids}
            {/* comments */}
            <div className="text-base space-y-4 block lg:hidden">
              {/* first row */}
              <div className="flex space-x-8 font-medium">
                <span>731 Comments</span>
                <div className="space-x-2 flex items-center">
                  <HiOutlineMenuAlt2 className="text-2xl" />
                  <span className="text-sm">Sorted by</span>
                </div>
              </div>
              {/* second row */}
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                  <img
                    src={logo}
                    alt="logo"
                    width={40}
                    className="rounded-full"
                  />
                  <input
                    onFocus={() => setShowAddComment(true)}
                    onChange={(e) => handleOnChanheComment(e)}
                    type="text"
                    placeholder="Add a comment..."
                    className="outline-none border-b-2 w-full border-[#AAAAAA] focus:border-white transition-all placeholder:text-[#AAAAAA] bg-transparent"
                  />
                </div>
                {showAddComment && (
                  <div className="flex space-x-4 justify-end transition-all">
                    <button
                      className="hover:bg-[#373737] p-2 px-3 rounded-2xl transition-all"
                      onClick={() => setShowAddComment(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className={
                        lenOne > 0
                          ? "bg-[#3EA6ff] p-2 px-3 rounded-2xl transition-all text-black"
                          : "bg-[#343333] p-2 px-3 rounded-2xl text-[#AAAAAA]"
                      }
                    >
                      Comment
                    </button>
                  </div>
                )}
              </div>
              {/* third row => all comments */}
              <div className="space-y-4 hidden lg:block">{commentItems}</div>
            </div>
            <div className="space-y-4 block lg:hidden">{commentItems}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchVid;

//  {
//    showReplies && (
//      <div className="space-y-4 transition-all">
//        {/* replay one */}
//        <div className="flex ml-2 mt-2 space-x-4">
//          <img
//            src={logo}
//            alt="logo"
//            width={24}
//            height={24}
//            className="rounded-full h-fit"
//          />
//          <div>
//            <div className="flex items-center">
//              <span className="text-[13px] mr-2 inline-block">
//                Khaled Mohamed
//              </span>
//              <span className="text-xs text-[#AAAAAA]">1 day ago</span>
//            </div>
//            <p className="text-sm">{state.snippet.description}</p>
//            <div className="flex items-center mb-2 space-x-4">
//              <span className="flex space-x-2 items-center">
//                <BiLike className="text-2xl" />
//                <span className="text-[#AAAAAA] text-sm">163</span>
//              </span>
//              <span className="flex space-x-2 items-center">
//                <BiDislike className="text-2xl" />
//                <span className="text-[#AAAAAA] text-sm">163</span>
//              </span>
//            </div>
//          </div>
//        </div>
//        <div className="flex ml-2 mt-2 space-x-4">
//          <img
//            src={logo}
//            alt="logo"
//            width={24}
//            height={24}
//            className="rounded-full h-fit"
//          />
//          <div>
//            <div className="flex items-center">
//              <span className="text-[13px] mr-2 inline-block">
//                Khaled Mohamed
//              </span>
//              <span className="text-xs text-[#AAAAAA]">1 day ago</span>
//            </div>
//            <p className="text-sm">{state.snippet.description}</p>
//            <div className="flex items-center mb-2 space-x-4">
//              <span className="flex space-x-2 items-center">
//                <BiLike className="text-2xl" />
//                <span className="text-[#AAAAAA] text-sm">163</span>
//              </span>
//              <span className="flex space-x-2 items-center">
//                <BiDislike className="text-2xl" />
//                <span className="text-[#AAAAAA] text-sm">163</span>
//              </span>
//            </div>
//          </div>
//        </div>
//      </div>
//    );
//  }
