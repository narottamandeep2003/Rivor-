import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate()
  const handleClick = () => {
    navigate("/")
  }
  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/2 h-full flex justify-center items-center max-xl:w-screen">
        <div className="w-[55%]  flex items-center flex-col max-xl:w-[90%]">
          <h1 className="text-[1.5rem] pb-10 max-xl:text-[1.2rem]">Login</h1>
          <button className=" w-full h-[45px] rounded-full border border-black flex justify-center items-center space-x-2">
            <img
              src="/assert/google.png"
              alt="..."
              className="w-[20px] h-[20px] object-cover object-center"
            />
            <p >sign in with google</p>
          </button>
          <p className="pt-3 font-light  text-[.8rem]">
            or Login with your Email
          </p>
          <div className="w-full flex flex-col">
            <label htmlFor="Email" className=" pl-3 pb-1">
              Email
            </label>
            <input
              type="text"
              className=" text-left  w-full h-[45px] rounded-full border border-black focus:outline-none pl-4 "
              placeholder="example.gmail.com"
              id="Email"
            />
          </div>
          <div className="w-full flex flex-col pb-4">
            <label htmlFor="Password" className=" pl-3 pb-1">
              Password
            </label>
            <input
              type="password"
              className=" text-left  w-full h-[45px] rounded-full border border-black focus:outline-none pl-4 pr-4 "
              placeholder="@d5tgd6l&nd#"
              id="Password"
            />
          </div>
          <div className="pb-2">
            <p className="text-[.9rem]  text-blue-800  cursor-pointer ">
              forgot password ?
            </p>
          </div>
          <button className="w-full h-[45px] rounded-full border border-black text-white bg-black "
            onClick={handleClick}>
            Login
          </button>
          <p className="py-2 text-[.9rem]">
            Don't have an account yet?{" "}
            <Link to="/signup" className=" text-blue-800 text-[.9rem]">
              create one
            </Link>{" "}
          </p>
        </div>
      </div>
      <div className="w-1/2 h-full max-xl:hidden">
        <img
          src="/assert/C2.jpg"
          alt="..."
          className=" object-cover object-center w-full h-full "
        />
      </div>
    </div>
  );
}
