import axios from "axios";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductItem(data) {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/product/"+data.id)
  };
  const handleEnter=()=>{
    gsap.to(".cursor", {
      duration: 0.5,
      scale: 5,
      ease: "power1.out",
      overwrite: "auto",
      stagger: 0.02,
    });
  }
  const handleLeave=()=>{
    gsap.to(".cursor", {
      duration: 0.5,
      scale: 1,
      ease: "power1.out",
      overwrite: "auto",
      stagger: 0.02,
    });
  }

  return (
    <div className=" w-[100%] self-center mx-auto max-lg:w-[100%] ">
      <img
        src={`${data.imgUrl}`}
        alt="...."
        className=" w-full h-[450px] object-cover object-top  max-lg:h-[50%]"
        onClick={handleClick}
        onPointerEnter={handleEnter}
        onPointerLeave={handleLeave}
      />
      <h1 className=" font-semibold text-[1.2rem] pt-2 max-sm:text-[1rem]">
        stylish clothes dress
      </h1>
      <h3 className=" font-light text-[1rem] pt-1 pb-1 text-[#323232] max-sm:text-[.9rem]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </h3>
      <p className=" font-bold text-[1rem] max-sm:text-[.9rem] ">1000$</p>
    </div>
  );
}
export default function Products() {
  const [featuredItem, setFeaturedItem] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}api/getFeaturedProduct`).then((Response) => {
      // console.log(Response)
      if (Response.data.data.success) {
        setFeaturedItem(Response.data.data.data)
        console.log(featuredItem)
      }
    }).catch((err) => {
      //   
      console.log(err)
    })

  }, [featuredItem])
  return (
    <div className=" py-20 w-screen flex justify-center flex-col items-center max-lg:py-5">
      <div className="grid grid-cols-4  justify-center items-center  gap-y-[5rem] gap-x-[16px]   w-[calc(100%-150px)] max-sm:grid-cols-2 max-sm:w-[calc(100%-15px)] max-sm:gap-y-[2rem] max-sm:gap-x-[.8rem] max-xl:grid-cols-2 max-xl:w-[calc(100%-15px)] max-xl:gap-y-[2rem] max-xl:gap-x-[.8rem]">
        {featuredItem.map((val) => {
          return <ProductItem imgUrl={val.imgUrl} key={val._id} id={val._id} title={val.title} price={val.price} description={val.description}></ProductItem>
        })
        }
      </div>
    </div>
  );
}
