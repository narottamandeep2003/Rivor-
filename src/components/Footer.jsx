import React from "react";

export default function Footer() {
  return (
    <>
      <div className=" w-screen b py-10"></div>
      <div className=" flex w-screen h-[100px] justify-between  max-xl:flex-col  max-xl:justify-center  ">
        <div className="flex space-x-5 h-full items-center pl-[100px] max-xl:pl-1 max-xl:space-x-3   max-xl:flex-wrap max-xl:px-2 max-xl:text-[.9rem] max-xl:justify-center">
          <p>Cookies Policy</p>
          <p>Legal Terms</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex   space-x-5  h-full items-center pr-[100px] max-xl:justify-center  max-xl:flex-wrap max-xl:pr-0 max-xl:px-2 max-xl:space-x-3 max-xl:text-[.9rem]">
          <p className=" font-semibold">Connect:</p> <p>Instagram</p>{" "}
          <p>LinkedIn</p> <p>Twitter</p> <p>Facebook</p> <p>YouTube</p>{" "}
          <p>TikTok</p> <p>Pinterest</p>
        </div>
      </div>
      <div className=" w-screen b py-2"></div>

    </>
  );
}
