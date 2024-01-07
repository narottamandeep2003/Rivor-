import { Environment, Float, } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Hero } from '../components/Hero'
import  Footer from '../components/Footer'
import FeaturedProduct from '../components/FeaturedProduct'
export default function Home() {
  return (
    <div className='bg-[#0f0f0f] w-screen h-screen'>
      <div className='w-full h-full'>
        <Canvas shadows className='w-full h-full' camera={{ position: [20, 0.9, 20], fov: 26 }}>
          <ambientLight intensity={0.1} />
          <Environment preset="city" />
          <directionalLight color="red" position={[0, 0, 5]} />
          <Float>
            <Hero position={[0, -3, 0]} rotation={[0, .7, 0]} scale={1.2} ></Hero>
          </Float>
        </Canvas>
      </div>
      <div className=' text-center text-white absolute z-20 bottom-20 w-full flex flex-col'>
        <span className='text-[7rem] leading-none max-md:text-[3rem] max-sm:text-[2rem]'>Digital products </span>
        <span className='text-[7rem]  leading-tight max-md:text-[3rem] max-sm:text-[2rem] max-md:pb-5'>creatives & immersives</span>
        <span className='text-[1.1rem]  max-md:text-[1rem] leading-tight'>We think and design unique experiences</span>
        <span className='text-[1.1rem]  max-md:text-[1rem] leading-tight'>for tomorrow's innovative products.</span>
      </div>
      <video src="/video.mp4" autoPlay loop  className='w-screen h-screen object-cover max-md:h-[70vh]'></video>
      <FeaturedProduct></FeaturedProduct>
      <Footer></Footer>
    </div>
  )
}
