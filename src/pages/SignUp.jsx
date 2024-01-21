import axios from "axios";
import gsap from "gsap";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { changeRole } from '../redux/features/userRole'
export default function SignUp() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    role: "User"
  })
  let navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    // /verify
    axios.defaults.withCredentials = true
    axios.post(`${process.env.REACT_APP_API}api/verify`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((Response) => {
        console.log(Response)
        if (Response.data.data.success) {
          dispatch(changeRole({ role: Response.data.data.data.role, active: true }))
          navigate("/")
        }
      })
      .catch((err) => {
        dispatch(changeRole({ role: "User", active: false }))
        //  
      });
  }, [dispatch,navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    if ([data.name, data.email, data.password, data.cpassword, data.role].some((val) => { return val === "" })) {
      alert("all fields are required")
      return false
    }
    if (data.password !== data.cpassword) {
      alert("check your password")
      return false
    }
    if (data.password.length < 8) {
      alert("passwords must be at least 8 characters")
      return false
    }
    axios.post(`${process.env.REACT_APP_API}api/signup`, { name: data.name, email: data.email, password: data.password, role: data.role },
      { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
    ).then((Response) => {
      if (Response.data.data.success) {
        navigate("/otp")
      }
      else {
        alert(Response.data.data.message)
      }
    }).catch((err) => {
      //   
      console.log(err)
    })

  }



  useEffect(() => {
    document.querySelector('.cursor').style.backgroundColor = "black"
  }, [])



  const handleEnter = () => {
    document.querySelector('.cursor').style.backgroundColor = "white"
    gsap.to(".cursor", {
      duration: 0.5,
      scale: 2,
      ease: "power1.out",
      overwrite: "auto",
      stagger: 0.02,
    });
  }


  const handleMouseLeave = () => {
    gsap.to(".cursor", {
      duration: 0.5,
      scale: 1,
      ease: "power1.out",
      overwrite: "auto",
      stagger: 0.02,
    });
    document.querySelector('.cursor').style.backgroundColor = "black"
  }
  return (
    <div className="w-screen h-screen flex" >
      <div className="w-1/2 h-full flex justify-center items-center max-xl:w-screen">
        <form className="w-[55%]  flex items-center flex-col max-xl:w-[90%]" onSubmit={(e) => handleSubmit(e)}>
          <h1 className="text-[1.5rem] pb-5 max-xl:text-[1.2rem]">Sign up</h1>
          <p className="pt-3 font-light  text-[.8rem]">
            signup with your Email
          </p>
          <div className="w-full flex flex-col">
            <label htmlFor="UserName" className=" pl-3 pb-1">
              User name
            </label>
            <input
              type="text"
              className=" text-left  w-full h-[40px] rounded border border-black focus:outline-none pl-4 "
              placeholder="User name"
              id="UserName"
              value={data.name}
              onChange={(e) => { setData({ ...data, "name": e.target.value }) }}
            />
          </div>


          <div className="w-full flex flex-col">
            <label htmlFor="Email" className=" pl-3 pb-1">
              Email
            </label>
            <input
              type="text"
              className=" text-left  w-full h-[40px] rounded border border-black focus:outline-none pl-4 "
              placeholder="example.gmail.com"
              id="Email"
              value={data.email}
              onChange={(e) => { setData({ ...data, "email": e.target.value }) }}
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="role" className=" pl-3 pb-1">
              Role
            </label>
            <select name="Role" id="Role" className="text-left  w-full h-[40px] rounded border border-black focus:outline-none"
              value={data.role}
              onChange={(e) => { setData({ ...data, "role": e.target.value }) }}
            >
              <option value="User" >User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div className="w-full flex flex-col pb-1">
            <label htmlFor="Password" className=" pl-3 pb-1">
              Password
            </label>
            <input
              type="password"
              className=" text-left  w-full h-[40px] rounded border border-black focus:outline-none pl-4 pr-4 "
              placeholder="@d5tgd6l&nd#"
              id="Password"
              value={data.password}
              onChange={(e) => { setData({ ...data, "password": e.target.value }) }}
            />
          </div>
          <div className="w-full flex flex-col pb-4">
            <label htmlFor="CPassword" className=" pl-3 pb-1">
              Confirm Password
            </label>
            <input
              type="password"
              className=" text-left  w-full h-[40px] rounded border border-black focus:outline-none pl-4 pr-4 "
              placeholder="@d5tgd6l&nd#"
              id="CPassword"
              value={data.cpassword}
              onChange={(e) => { setData({ ...data, "cpassword": e.target.value }) }}
            />
          </div>
          <div className="pb-2">
            <p className="text-[.9rem]  text-blue-800  cursor-pointer ">
              forgot password ?
            </p>
          </div>
          <button className="w-full h-[40px] rounded border border-black text-white bg-black
          "
            onMouseEnter={handleEnter} onMouseLeave={handleMouseLeave}>
            Signup
          </button>
          <p className="py-2 text-[.9rem]">
            Already have an account?{" "}
            <Link to="/login" className=" text-blue-800 text-[.9rem]" >
              Login
            </Link>{" "}
          </p>
        </form>
      </div>
      <div className="w-1/2 h-full max-xl:hidden">
        <img
          src="/assert/C2.jpg"
          alt="..."
          className=" object-cover object-center w-full h-full"
        />
      </div>
    </div>
  );
}
