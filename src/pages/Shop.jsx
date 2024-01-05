import React, { useState } from "react";
import Products from "../components/Product";

function SearchFilter() {
  const [open, setOpen] = useState({
    categoryIsOpen: false,
    filtreIsOpen: false,
  });
  return (
    <>
      <div className="pt-10 w-screen flex justify-center flex-col items-start max-xl:pt-3 ">
        <div className="w-screen justify-center flex  max-xl:px-2">
          <button
            className="h-[50px]  border-[#222] bg-[#222] text-white border-r-white px-3 border text-[1rem] border-l rounded-l-full max-xl:text-[.8rem]"
            onClick={() => {
              setOpen({ ...open, categoryIsOpen: !open.categoryIsOpen });
            }}
          >
            <i class="bi bi-card-list"></i>
          </button>
          <input
            type="text"
            placeholder="Search"
            className=" border border-[#222]  border-l-0 text-white border-r-0 h-[50px] w-[40vw] text-[1rem] flex py-auto rounded-l-none rounded-r-none pl-5  focus:outline-none  placeholder:text-[1rem] placeholder:text-white bg-[#222] max-xl:w-full  max-xl:text-[.8rem] placeholder:max-xl:text-[.8rem]"
          />
          <button
            className="h-[50px]  border-[#222]  border-l-white bg-[#222] text-white w-[100px] border text-[1rem] border-l rounded-r-full max-xl:text-[.8rem]"
            onClick={() => {
              setOpen({ ...open, filtreIsOpen: !open.filtreIsOpen });
            }}
          >
            <i class="bi bi-sliders pr-2 max-xl:pr-[5px]"></i> Filter
          </button>
        </div>
      </div>
      {open.categoryIsOpen || open.filtreIsOpen ? (
        <div className="w-screen relative flex justify-center pt-2">
          <div className="w-[50%] relative max-xl:w-[calc(100%-10px)]">
            <div className=" h-[200px] bg-[#222] position w-full  rounded-xl absolute top-0 ">
              {" "}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default function Shop() {
  return (
    <div>
      <SearchFilter></SearchFilter>
      <Products></Products>
    </div>
  );
}
