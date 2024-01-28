import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { changeRole } from '../redux/features/userRole'

function Profile(params) {
  let navigate = useNavigate()

  const dispatch = useDispatch()
  const location = useLocation();
  let handleClick = () => {
    axios.defaults.withCredentials = true
    axios.post(`${process.env.REACT_APP_API}api/logout`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    })
      .then((Response) => {
        console.log(Response)
        if (Response.data.data.success) {
          dispatch(changeRole({ role: "User", active: false }))
          navigate("/", { replace: true })
        }
      })
      .catch((err) => {
        dispatch(changeRole({ role: "User", active: false }))

      });
  }
  return <>
    <img
      src="/assert/profile.jpg"
      alt="..."
      className=" w-[40px] h-[40px] rounded-full"
    />
    <NavLink
      className={
        `${location.pathname === "/" ? " text-white px-4" : " outline outline-2 outline-[#333] text-[#333] hover:bg-[#333] hover:outline-none hover:text-white flex px-10 h-[40px] justify-center items-center rounded-md"}`
      }
      onClick={handleClick}
    >
      LogOut
    </NavLink>
  </>
}
function Login(params) {
  const location = useLocation();

  return <>
    <NavLink
      to={"/login"}
      className={
        `${location.pathname === "/" ? " text-white px-4" : "bg-[#222] text-white hover:bg-[#333] flex px-8 h-[40px] justify-center items-center rounded-md"}`
      }
    >
      Login
    </NavLink>
    <NavLink
      to={"/signup"}
      className={
        `${location.pathname === "/" ? " text-white px-4" : " outline outline-2 outline-[#333] text-[#333] hover:bg-[#333] hover:outline-none hover:text-white flex px-10 h-[40px] justify-center items-center rounded-md"}`
      }
    >
      Sign up
    </NavLink>
  </>
}
export default function NavBar() {
  let CartSize = useSelector((state) => state.Cart.value)
  const data = useSelector(state => state.Role.value)
  const location = useLocation();
  const [click, setclick] = useState(false);
  let navigate = useNavigate()

  const dispatch = useDispatch()
  let handleClick = () => {
    axios.defaults.withCredentials = true
    axios.post(`${process.env.REACT_APP_API}api/logout`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    })
      .then((Response) => {
        console.log(Response)
        if (Response.data.data.success) {
          dispatch(changeRole({ role: "User", active: false }))
          navigate("/", { replace: true })
        }
      })
      .catch((err) => {
        dispatch(changeRole({ role: "User", active: false }))

      });
  }
  return (
    <>
      <nav className={`w-screen h-[70px] justify-center items-center flex absolute top-0 left-0 z-40 ${location.pathname === "/" ? " bg-[#0f0f0f]" : "bg-white"} ${(location.pathname === "/signup" || location.pathname === "/login" || location.pathname === "/otp") ? "hidden" : ""}`}>
        <div className="w-[calc(100vw-150px)] h-[70px] flex justify-between items-center max-sm:w-[calc(100vw-100px)]">
          <h1 className={`font-bold text-[1.3rem] font-mono max-sm:text-[1rem] ${location.pathname === "/" ? " text-white" : "text-[#0f0f0f]"}`}>
            Rivoré
          </h1>

          <div className="flex justify-center  items-center flex-row sm:block max-md:block max-lg:block xl:hidden 2xl:hidden">
            <div className={` ${location.pathname === "/" ? "text-white" : "text-black"}`}>
              <svg
                onClick={() => {
                  setclick(!click);
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={`bi bi-list`}
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </div>
          </div>

          <div className={`flex h-full space-x-20 items-center max-sm:hidden max-md:hidden  max-lg:hidden ${location.pathname === "/" ? " text-white" : "text-[#0f0f0f]"}`}>
            <NavLink
              to={"/"}
              className={({ isActive, isPending, isTransitioning }) =>
                isActive ? " font-semibold" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/shop"}
              className={({ isActive, isPending, isTransitioning }) =>
                isActive ? " font-semibold" : ""
              }
            >
              Shop
            </NavLink>
            {
              (data.active && data.role === "Admin") ? (<NavLink
                to={"/admin"}
                className={({ isActive, isPending, isTransitioning }) =>
                  isActive ? " font-semibold" : ""
                }
              >
                Admin
              </NavLink>) : ""
            }

            <NavLink
              to={"/cart"}
              className={({ isActive, isPending, isTransitioning }) =>
                isActive ? " font-semibold" : ""
              }
            >
              Cart({CartSize.length})
            </NavLink>

          </div>

          <div className="flex h-full space-x-5 items-center  max-sm:hidden max-md:hidden  max-lg:hidden">
            {data.active ? (<Profile></Profile>) : <Login></Login>}


          </div>
        </div>
      </nav>

      <div
        className={`${click ? "" : "hidden"
          } absolute left-0 top-[70px] bg-black w-screen h-[calc(100vh-50px)] pl-3 space-y-2 flex flex-col xl:hidden lg:hidden z-30`}
      >
        <NavLink
          to={"/"}
          className={({ isActive, isPending, isTransitioning }) =>
            isActive ? " font-semibold text-white" : " text-white"
          }
          onClick={() => { setclick(false) }}
        >
          Home
        </NavLink>
        <NavLink
          to={"/shop"}
          className={({ isActive, isPending, isTransitioning }) =>
            isActive ? " font-semibold text-white" : "text-white"
          }
          onClick={() => { setclick(false) }}
        >
          Shop
        </NavLink>
        <NavLink
          to={"/cart"}
          className={({ isActive, isPending, isTransitioning }) =>
            isActive ? " font-semibold text-white" : "text-white"
          }
          onClick={() => { setclick(false) }}
        >
          Cart(0)
        </NavLink>
        {
          data.active ? (
            <>
              <NavLink
                to={"/login"}

                className={
                  `${location.pathname === "/" ? " text-white " : " outline outline-2 outline-[#333] text-[#333] hover:bg-[#333] hover:outline-none hover:text-white flex  h-[40px] justify-center items-center rounded-md"}`
                }
                onClick={() => { setclick(false) }}
              >
                Profile
              </NavLink>
              <NavLink
                to={"/logout"}
                className={
                  `${location.pathname === "/" ? " text-white " : " outline outline-2 outline-[#333] text-[#333] hover:bg-[#333] hover:outline-none hover:text-white flex  h-[40px] justify-center items-center rounded-md"}`
                }
                onClick={() => { setclick(false);  
                  handleClick()}}
              >
                Logout
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to={"/login"}

                className={
                  `${location.pathname === "/" ? " text-white " : " outline outline-2 outline-[#333] text-[#333] hover:bg-[#333] hover:outline-none hover:text-white flex  h-[40px] justify-center items-center rounded-md"}`
                }
                onClick={() => { setclick(false) }}
              >
                login
              </NavLink>
              <NavLink
                to={"/signup"}
                className={
                  `${location.pathname === "/" ? " text-white " : " outline outline-2 outline-[#333] text-[#333] hover:bg-[#333] hover:outline-none hover:text-white flex  h-[40px] justify-center items-center rounded-md"}`
                }
                onClick={() => { setclick(false) }}
              >
                signup
              </NavLink>
            </>
          )
        }


      </div>
    </>
  );
}
