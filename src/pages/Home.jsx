import { Environment, Float, } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'
import FeaturedProduct from '../components/FeaturedProduct'
import gsap from 'gsap'
import axios from "axios"
import { useDispatch } from "react-redux"
import { changeRole } from '../redux/features/userRole'
export default function Home() {
  const dispatch = useDispatch()
  const [featuredItem,setFeaturedItem]=useState([])

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
        }
      })
      .catch((err) => {
        dispatch(changeRole({ role: "User", active: false }))
         
      });
  }, [dispatch])
  useEffect(() => {
    document.querySelector('.cursor').style.backgroundColor = "white"
    gsap.to(".cursor", {
      duration: 0.5,
      scale: 1,
      ease: "power1.out",
      overwrite: "auto",
      stagger: 0.02,
    });
  }, [])


  let getData = async () => {
    axios.get(`${process.env.REACT_APP_API}api/getFeaturedProduct`).then((Response) => {
        // console.log(Response)
        if (Response.data.data.success) {
          setFeaturedItem(Response.data.data.data)
        }
    }).catch((err) => {
        //   
        console.log(err)
    })
}
useEffect(() => {
    getData()
}, [])
  return (
    <div className='bg-[#0f0f0f] w-screen h-screen'>
      <div className='w-full h-full'>
        <Suspense fallback={<h1 className=' text-orange-500'>Loading</h1>}>
        <Canvas shadows className='w-full h-full' camera={{ position: [20, 0.9, 20], fov: 26 }}>
          <ambientLight intensity={0.1} />
          <Environment preset="city" />
          <directionalLight color="red" position={[0, 0, 5]} />
          <Float>
            <Hero position={[0, -3, 0]} rotation={[0, .7, 0]} scale={1.2} ></Hero>
          </Float>
        </Canvas>
        </Suspense>
      </div>
      <div className=' text-center text-white absolute z-20 bottom-20 w-full flex flex-col'>
        <span className='text-[7rem] leading-none max-md:text-[3rem] max-sm:text-[2rem]'>Digital products </span>
        <span className='text-[7rem]  leading-tight max-md:text-[3rem] max-sm:text-[2rem] max-md:pb-5'>creatives & immersives</span>
        <span className='text-[1.1rem]  max-md:text-[1rem] leading-tight'>We think and design unique experiences</span>
        <span className='text-[1.1rem]  max-md:text-[1rem] leading-tight'>for tomorrow's innovative products.</span>
      </div>
      <video src="/video.mp4" autoPlay loop className='w-screen h-screen object-cover max-md:h-[70vh]'></video>
      <FeaturedProduct Items={featuredItem}></FeaturedProduct>
      <Footer></Footer>
    </div>
  )
}
