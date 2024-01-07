import React from "react";

export default function CheckOut() {
  return (
    <>
    <div className="pt-[70px]"></div>
    <div className="w-screen h-[calc(100vh-70px)] flex">
      <img
        src="assert/C2.jpg"
        alt="..."
        className="w-1/2 object-center object-cover max-xl:hidden"
      />
      <div className="w-1/2 flex justify-center items-center max-xl:w-screen max-xl:items-start">
        <div className=" w-[80%]  flex flex-col rounded-md space-y-2 max-xl:w-[90%]">
          <h1 className="text-center py-4 text-[1.2rem] max-xl:text-[1rem] ">Payment</h1>
          <div className="w-full px-3 space-y-1">
            <h1 className=" px-2 text-[#222] max-xl:text-[.9rem] ">card holder name</h1>
            <div className="flex">
              <button className=" border w-[30px] h-[40px] border-[#222] rounded-l-full border-r-0 flex justify-center items-center ">
                <i className="bi bi-person-vcard-fill text-[#222]"></i>
              </button>
              <input
                type="text"
                className="border  text-[#222] placeholder:text-[#222]  border-[#222] focus:outline-none w-full h-[40px] border-l-0 rounded-r-full max-xl:text-[.9rem] "
                placeholder="card holder name"
              />
            </div>
          </div>

          <div className="w-full px-3 space-y-1">
            <h1 className=" px-2 text-[#222] max-xl:text-[.9rem] ">card holder name</h1>
            <div className="flex">
              <button className=" border w-[30px] h-[40px] border-[#222] rounded-l-full border-r-0 flex justify-center items-center ">
                <i className="bi bi-credit-card-2-back-fill text-[#222]"></i>
              </button>
              <input
                type="text"
                className="border  text-[#222] placeholder:text-[#222]  border-[#222] focus:outline-none w-full h-[40px] border-l-0 rounded-r-full max-xl:text-[.9rem] "
                placeholder="XXXX XXXX XXXX XXXX"
              />
            </div>
          </div>

          <div className="w-full px-3 space-y-1 flex justify-between">
            <div>
              <h1 className=" px-2 text-[#222] pb-1 max-xl:text-[.9rem] ">Expiry date</h1>
              <div className="flex space-x-3">
                <input
                  type="text "
                  placeholder="MM"
                  className=" border-[#222] placeholder:text-[#222]  text-[#222] border rounded-full  w-[100px] h-[40px] focus:outline-none px-3 max-xl:text-[.9rem]  max-xl:w-[80px] "
                />
                <input
                  type="text"
                  placeholder="YYYY"
                  className=" border-[#222]  placeholder:text-[#222] text-[#222] border rounded-full  w-[100px] h-[40px] focus:outline-none px-3 max-xl:text-[.9rem]  max-xl:w-[80px]"
                />
              </div>
            </div>

            <div>
              <h1 className=" px-2 text-[#222] pb-1 max-xl:text-[.9rem] ">cvv</h1>
              <div className="flex">
                <input
                  type="text"
                  placeholder="1 2 3"
                  className="border border-[#222] placeholder:text-[#222] text-[#222] w-[100px] px-3 placeholder:px-1 h-[40px] focus:outline-none  rounded-full rounded-r-none border-r-0 max-xl:text-[.9rem]  max-xl:w-[80px]"
                />
                <button className=" border w-[30px] h-[40px] border-[#222] rounded-r-full border-l-0 flex justify-center items-center ">
                  <i className="bi bi-credit-card-2-back-fill text-[#222]"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between px-4 pt-1">
            <p className="max-xl:text-[.9rem] ">Subcost</p>
            <p className="max-xl:text-[.9rem] ">$150</p>
          </div>
          <div className="flex justify-between px-4 pt-2">
            <p className="max-xl:text-[.9rem] ">Discount</p>
            <p className="max-xl:text-[.9rem] ">$10</p>
          </div>
          <div className="flex justify-between px-4 pt-2 border-b   border-[#222] "></div>
          <div className="flex justify-between px-4 pt-2">
            <p className=" font-bold max-xl:text-[.9rem] ">Totalcount</p>
            <p className=" font-bold max-xl:text-[.9rem] ">$140</p>
          </div>
          <div className="pt-2"></div>
          <button className="bg-[#222] py-2 rounded-full text-white p max-xl:text-[.9rem] ">
            Pay
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
