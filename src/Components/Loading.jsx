import React from "react";

const Loading = ({ dir }) => {
  const items = [];

  for (let i = 0; i < 8; i++) {
    items.push(
      <div
        className={
          dir
            ? "w-72 mt-4 mx-2 cursor-pointer"
            : "w-full mt-4 mx-2 cursor-pointer"
        }
        key={i}
      >
        <div
          className={
            dir
              ? "border-0 rounded-none animate-pulse flex flex-col space-y-2"
              : "border-0 rounded-none animate-pulse flex flex-row space-x-2 space-y-2"
          }
        >
          <div className="rounded bg-gray-500 h-44 w-72"></div>
          <div className="text-white flex space-x-2">
            <div className="rounded-full bg-gray-500 w-8 h-8 "></div>
            <div className="space-y-2">
              <div className="w-60 bg-gray-500 h-5 mt-1 whitespace-nowrap overflow-hidden text-ellipsis"></div>
              <div className="bg-gray-500 w-40 h-5 text-sm"></div>
              <div className="flex">
                <div className="bg-gray-500 w-20 h-5 text-xs "></div>
                <div className="bg-gray-500 w-20 h-5 font-bold text-md"></div>
                <div className="bg-gray-500 w-20 h-5 text-xs"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={
        dir
          ? "flex flex-row flex-wrap justify-center"
          : "flex flex-col flex-wrap justify-center"
      }
    >
      {items}
    </div>
  );
};

export default Loading;
