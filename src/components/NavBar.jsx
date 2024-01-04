import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [click, setclick] = useState(false);
  return (
    <>
      <nav className=" w-screen h-[70px] justify-center items-center flex">
        <div className="w-[calc(100vw-150px)] h-[70px] flex justify-between items-center max-sm:w-[calc(100vw-100px)]">
          <h1 className="font-bold text-[2rem] font-mono max-sm:text-[1rem]">
            Rivoré
          </h1>

          <div className="flex justify-center  items-center flex-row sm:block max-md:block max-lg:block xl:hidden 2xl:hidden">
            <div>
              <svg
                onClick={() => {
                  setclick(!click);
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </div>
          </div>

          <div className="flex h-full space-x-20 items-center max-sm:hidden max-md:hidden  max-lg:hidden">
            <NavLink
              to={"/"}
              className={({ isActive, isPending, isTransitioning }) =>
                isActive ? " font-semibold" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/h"}
              className={({ isActive, isPending, isTransitioning }) =>
                isActive ? " font-semibold" : ""
              }
            >
              About
            </NavLink>
            <NavLink
              to={"/8"}
              className={({ isActive, isPending, isTransitioning }) =>
                isActive ? " font-semibold" : ""
              }
            >
              Shop
            </NavLink>
            <NavLink
              to={"/9"}
              className={({ isActive, isPending, isTransitioning }) =>
                isActive ? " font-semibold" : ""
              }
            >
              Cart(0)
            </NavLink>
          </div>
          <div className="flex h-full space-x-5 items-center  max-sm:hidden max-md:hidden  max-lg:hidden">
            <img
              src="/assert/profile.jpg"
              alt="..."
              className=" w-[40px] h-[40px] rounded-full"
            />
            <NavLink
              className={
                "bg-[#222] text-white hover:bg-[#333] flex px-8 h-[40px] justify-center items-center rounded-md"
              }
            >
              LogOut
            </NavLink>
            {/* <NavLink
            className={
              "bg-[#222] text-white hover:bg-[#333] flex px-8 h-[40px] justify-center items-center rounded-md"
            }
          >
            Login
          </NavLink>
          <NavLink
            className={
              " outline outline-2 outline-[#333] text-[#333] hover:bg-[#333] hover:outline-none hover:text-white flex px-10 h-[40px] justify-center items-center rounded-md"
            }
          >
            Sign up
          </NavLink> */}
          </div>
        </div>
      </nav>

      <div
        className={`${
          click ? "" : "hidden"
        } absolute left-0 top-[70px] bg-black w-screen h-[calc(100vh-50px)] pl-3 space-y-2 flex flex-col xl:hidden lg:hidden z-30`}
      >
        <NavLink
          to={"/"}
          className={({ isActive, isPending, isTransitioning }) =>
            isActive ? " font-semibold text-white" : " text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/h"}
          className={({ isActive, isPending, isTransitioning }) =>
            isActive ? " font-semibold text-white" : "text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to={"/8"}
          className={({ isActive, isPending, isTransitioning }) =>
            isActive ? " font-semibold text-white" : "text-white"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to={"/9"}
          className={({ isActive, isPending, isTransitioning }) =>
            isActive ? " font-semibold text-white" : "text-white"
          }
        >
          Cart(0)
        </NavLink>
      </div>
    </>
  );
}
