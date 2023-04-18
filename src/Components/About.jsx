import moment from "moment";
import React from "react";
import { BsFlag } from "react-icons/bs";

const About = ({ snippet, stats }) => {
    const formatNums = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  return (
    <div className="text-white grid grid-cols-12 gap-4 px-4 md:pr-16 h-[50vh] transition-all duration-500">
      <div className="space-y-4 col-span-12 md:col-span-8">
        <h2 className="text-base font-semibold">Description</h2>
        <p className="text-sm">{snippet.description}</p>
        <div className="bg-[#AAAAAA] w-full h-px"></div>
      </div>
      <div className="col-span-12 md:col-span-4">
        <ul className="text-sm p-0 space-y-4">
          <li className="border-b pb-2 text-base font-semibold border-[#AAAAAA]">
            States
          </li>
          <li className="border-b pb-2 border-[#AAAAAA]">
            Joined {moment(snippet.publishedAt).format("MMMM DD, YYYY")}
          </li>
          {stats.hiddenSubscriberCount && (
            <li className="border-b pb-2 border-[#AAAAAA]">
              {formatNums(stats.viewCount)} views
            </li>
          )}
          <li className="">
            <BsFlag />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
