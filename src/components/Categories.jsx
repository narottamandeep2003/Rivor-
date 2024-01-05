import React from "react";

export default function Categories() {
  return (
    <>
      <div className="py-10"></div>
      <div className=" w-screen h-[90vh] flex justify-center max-xl:h-[60vh]">
        <div className="w-[80%] h-full rounded-xl grid grid-cols-4 grid-rows-4 gap-x-2 gap-y-2 max-xl:w-[90%] ">
          <img
            src="/assert/C1.jpg"
            alt="..."
            className="object-cover origin-center  row-span-2 w-full h-full rounded-xl"
          />

          <img
            src="/assert/C4.jpg"
            alt="..."
            className="object-cover origin-center rounded-xl w-full h-full"
          />

          <img
            src="/assert/C5.jpg"
            alt="..."
            className="object-cover origin-center rounded-xl w-full h-full"
          />

          <img
            src="/assert/C6.jpg"
            alt="..."
            className="row-span-2 object-cover origin-center rounded-xl w-full h-full"
          />

          <img
            src="/assert/C8.jpg"
            alt="..."
            className=" row-span-2 col-span-2  object-cover origin-center rounded-xl w-full h-full"
          />

          <img
            src="/assert/C7.jpg"
            alt="..."
            className="w-full h-full  object-cover origin-center rounded-xl"
          />

          <img
            src="/assert/C2.jpg"
            alt="..."
            className=" row-span-2  object-cover origin-center rounded-xl w-full h-full"
          />

          <img
            src="/assert/C9.jpg"
            alt="..."
            className=" object-cover origin-center rounded-xl w-full h-full"
          />
          <img
            src="/assert/C7.jpg"
            alt="..."
            className="object-cover origin-center rounded-xl w-full h-full"
          />
          <img
            src="/assert/C3.jpg"
            alt="..."
            className=" w-full h-full object-cover origin-center rounded-xl"
          />
        </div>
      </div>
      <div className="py-10 max-xl:py-5"></div>
    </>
  );
}
