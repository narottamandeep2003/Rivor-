import React from "react";

function ReviewItem(params) {
  return (
    <div className="rounded bg-[#e7e7e7] p-2 ">
      <div className="h-[50px]  flex items-center">
        {" "}
        <img
          src="/assert/P2.jpg"
          alt="..."
          className=" w-[40px] h-[40px] rounded-full object-cover object-center"
        />
        <h1 className=" pl-2 text-[1.3rem]  font-bold">
          Name the Lorem ipsum dolor sit amet
        </h1>
      </div>

      <p className="text-[1rem]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
        accusantium reprehenderit soluta blanditiis, corrupti dolores debitis,
        ratione enim voluptates nobis itaque, maxime aspernatur vel culpa ipsa
        consequuntur! Sunt, ipsam natus? Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Reiciendis accusantium reprehenderit soluta
        blanditiis, corrupti dolores debitis, ratione enim voluptates nobis
        itaque, maxime aspernatur vel culpa ipsa consequuntur! Sunt, ipsam
        natus?
      </p>
    </div>
  );
}
export default function Review() {
  return (
    <div className=" w-screen py-3 flex flex-col justify-center items-center">
      <div className="  w-[calc(100vw-100px)] grid grid-cols-1 gap-y-3 justify-center items-center">
        <ReviewItem></ReviewItem>
        <ReviewItem></ReviewItem>
        <ReviewItem></ReviewItem>
        <ReviewItem></ReviewItem>
        <ReviewItem></ReviewItem>
      </div>
    </div>
  );
}
