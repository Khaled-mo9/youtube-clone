import React from "react";

const Loading = ({ dir }) => {
  const items = [];

  for (let i = 0; i < 9; i++) {
    items.push(
      <div
        className={
          dir
            ? "col-span-12 smd:col-span-6 lg:col-span-4 mt-4 mx-2 cursor-pointer"
            : "col-span-12 mt-4 mx-2 cursor-pointer"
        }
        key={i}
      >
        <div
          className={
            dir
              ? "w-full border-0 rounded-none animate-pulse flex flex-col space-y-2"
              : "border-0 rounded-none animate-pulse flex flex-col md:flex-row space-x-2 space-y-2"
          }
        >
          <div
            className={
              dir
                ? "rounded bg-gray-500 h-44 w-full"
                : "rounded bg-gray-500 h-44 w-full md:w-1/4"
            }
          ></div>
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
          ? "grid grid-cols-12 gap-2 px-4 md:px-0 md:pr-6"
          : "grid grid-cols-12 gap-2 md:pr-6"
      }
    >
      {items}
    </div>
  );
};

export default Loading;
