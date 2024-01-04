import React from "react";

export default function HeroSection() {
  return (
    <div className=" w-screen flex flex-col justify-center ">
      <div className="w-full flex justify-center items-center">
        <h1 className=" w-[calc(100%-50px)] font-sans text-[4.5rem] font-bold text-center py-6 uppercase max-sm:text-[1.5rem] max-sm:py-2 max-sm:w-[calc(100%-15px)] max-md:text-[1.5rem]  max-md:py-4 max-lg:text-[2rem] max-lg:py-4 max-xl:text-[2.5rem] max-xl:py-4">
          Lorem ipsum dolor sit amet and the consectetur elit..
        </h1>
      </div>
      <div className=" w-full h-[80vh]  flex justify-center items-center relative z-10 pt-10  max-sm:pt-6 max-lg:pt-6 max-lg:h-[50vh]">
        <img
          src="/assert/Hero3.jpg"
          alt="..."
          className=" w-[calc(100%-150px)] rounded-xl h-full object-cover object-center grayscale z-10 max-xl:w-[calc(100%-50px)] max-md:w-[calc(100%-15px)]"
        />
        <button className=" absolute left-auto top-auto z-20 text-white font-semibold text-[2rem] outline outline-2 outline-white px-6 py-2 rounded-lg max-lg:text-[1.5rem] max-lg:px-3 max-lg:py-1">
          Explore
        </button>
      </div>
    </div>
  );
}
