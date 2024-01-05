import React from "react";

export default function ContactUs() {
  return (
    <>
    <div className="py-10"></div>
      <div className=" w-screen flex justify-center ">
        <form className=" w-[60%] flex  flex-col max-xl:w-full" onSubmit={(e)=>{e.preventDefault()}}>
          <div className="w-full flex   py-2 ">
            <div className="flex flex-col  w-full px-5 ">
              <label
                htmlFor="FirstName"
                className=" font-bold font-mono text-[1.5rem] max-xl:text-[1rem]"
              >
                First Name
              </label>
              <input
                type="text"
                id="FirstName"
                className="border-b focus:outline-none border-[#000000] placeholder:font-thin placeholder:font-mono placeholder:text-[#606060] font-mono w-full max-xl:text-[1rem] max-xl:placeholder:text-[.8rem]"
                placeholder="Enter your First Name"
              />
            </div>
            <div className="flex flex-col  w-full px-5">
              <label
                htmlFor="LastName"
                className=" font-bold font-mono text-[1.5rem] max-xl:text-[1rem]"
              >
                Last Name
              </label>
              <input
                type="text"
                id="LastName"
                className="border-b focus:outline-none border-[#000000] placeholder:font-thin placeholder:font-mono placeholder:text-[#606060] font-mono w-full max-xl:text-[1rem] max-xl:placeholder:text-[.8rem]"
                placeholder="Enter your last name "
              />
            </div>
          </div>

          <div className="w-full flex  justify-between py-10">
            <div className="flex flex-col px-5 w-full">
              <label
                htmlFor="Message"
                className=" font-bold font-mono text-[1.5rem] max-xl:text-[1rem]"
              >
                Message
              </label>
              <input
                type="text"
                id="Message"
                className="border-b focus:outline-none border-[#000000] placeholder:font-thin placeholder:font-mono placeholder:text-[#606060] max-xl:text-[1rem] font-mono w-full max-xl:placeholder:text-[.8rem]"
                placeholder="Enter your Message"
              />
            </div>

            <div className="flex flex-col px-5 w-full ">
              <label
                htmlFor="number"
                className=" font-bold font-mono text-[1.5rem] max-xl:text-[1rem]"
              >
               Number
              </label>
              <input
                type="number"
                id="number"
                className="border-b focus:outline-none border-[#000000] placeholder:font-thin placeholder:font-mono placeholder:text-[#606060] font-mono w-full max-xl:text-[1rem] max-xl:placeholder:text-[.8rem] "
                placeholder="Enter your number"
              />
            </div>
          </div>
          <button className=" self-start pl-5 font-semibold text-[1.2rem] max-xl:text-[1rem]">contact us</button>
        </form>
      </div>
    </>
  );
}
