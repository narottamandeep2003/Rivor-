import React from "react";

export default function ProductInfo() {
  return (
    <div>
      <div className=" w-screen h-[calc(100vh-70px)] flex">
        <img
          src="/assert/C2.jpg"
          alt="..."
          className=" w-1/2 h-full object-cover object-center"
        />
        <div className="w-1/2 h-full flex-col flex justify-center ">
          <div className="w-[80%] h-full flex-col flex justify-center">
            <h1 className=" font-semibold px-10 text-[1.8rem] py-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="  px-10 text-[1rem] py-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium explicabo reprehenderit itaque placeat dicta rerum
              ullam possimus quis nisi et! Hic, nam obcaecati architecto
              suscipit similique commodi dolorum fugit perspiciatis?
            </p>
            <h1 className="  px-10 text-[1rem] font-bold py-4">$1000</h1>
            <p className="  px-10 text-[1.2rem] py-1">Size</p>
            <div className=" px-10 py-4">
              <div className=" space-x-2">
                <button className="bg-[#222] text-white p-2 rounded-xl border border-[#222] w-[40px] h-[40px]">
                  M
                </button>
                <button className=" p-2 rounded-xl border border-[#222] w-[40px] h-[40px]">
                  S
                </button>
                <button className=" p-2 rounded-xl border border-[#222] w-[40px] h-[40px]">
                  L
                </button>
                <button className=" p-2 rounded-xl border border-[#222] w-[40px] h-[40px]">
                  Xl
                </button>
              </div>
            </div>
            <div className=" px-10 py-1">
              <button className=" bg-[#222] px-5 py-2 text-white rounded-xl ">
                Add To cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
