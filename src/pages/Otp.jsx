import axios from "axios";
import gsap from "gsap";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Otp() {
    const [data, setData] = useState({
        otp: ""
    })
    let navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        // navigate("/") 
        axios.defaults.withCredentials = true
        axios.post(`${process.env.REACT_APP_API}api/otp`,{otp:data.otp}, { withCredentials: true }).then((Response) => {
            if (Response.data.data.success) {
                navigate("/login")
            }
            else {
                alert(Response.data.data.message)
            }
        }).catch((err) => {
              
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
                <form className="w-[55%]  flex items-center flex-col max-xl:w-[90%]" onSubmit={(e) => { handleSubmit(e) }}>
                    <h1 className="text-[1.5rem] pb-5 max-xl:text-[1.2rem]">Otp</h1>
                    <p className="pt-3 font-light  text-[.8rem]">
                        Enter your otp
                    </p>
                    <div className="w-full flex flex-col">
                        <label htmlFor="otp" className=" pl-3 pb-1">
                            otp
                        </label>
                        <input
                            type="text"
                            className=" text-left  w-full h-[40px] rounded border border-black focus:outline-none pl-4 "
                            placeholder="#nefus"
                            id="otp"
                            value={data.otp}
                            onChange={(e) => { setData({ ...data, "otp": e.target.value }) }}
                        />
                    </div>


                    <div className="pt-3"></div>
                    <button className="w-full h-[40px] rounded border border-black text-white bg-black
          "
                        onMouseEnter={handleEnter} onMouseLeave={handleMouseLeave}>
                        verify
                    </button>
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
    )
}
