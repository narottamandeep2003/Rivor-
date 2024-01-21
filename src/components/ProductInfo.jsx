import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addCart } from "../redux/features/Cart";
export default function ProductInfo(param) {
  let info = param.info
  const dispatch = useDispatch()
  console.log(info)
  const [data, setData] = useState({
    color: "",
    size: ""
  })
  const AddToCart = () => {
    if(data.color===""||data.size==="") return
    dispatch(addCart({
      price:info.price,
      color:info.color,
      size:info.size,
      quantity:1,
      maxQuantity:info.quantity,
      id:info._id,
      imgUrl:info.imgUrl
    }))
  }
  return (
    <div className='pt-[70px] w-screen flex flex-col items-center '>
      <div className='w-[calc(100vw-100px)] max-xl:w-[calc(100vw-10px)]' >
        <div className='w-full flex max-lg:flex-col'>
          <div className='w-[40%] flex items-center justify-center flex-col max-xl:w-full'>
            <img src={info?.imgUrl} alt="..." className='w-full h-[calc(100vh-70px)] max-xl:h-[90vh] object-cover object-center ' />
          </div>
          <div className='pl-10  flex flex-col justify-center max-xl:pl-0 w-[50%] max-xl:w-full'>
            <div className='flex flex-col text-[2rem]'>
              <div>{info?.title}</div>

            </div>
            <div className='flex flex-col pt-2 text-[1.2rem] pb-2'>

              <div>{info?.description}</div>
            </div>
            <div className='flex flex-col '>
              <p>{info?.categories}</p>
            </div>
            <div className='flex max-xl:flex-col text-[1.2rem] '>
              <div className='flex flex-col'>
                <b>${info?.price}</b>
              </div>
            </div>

            <div className='flex flex-col '>
              <label htmlFor="Color" className='  text-[1rem]'>Size</label>
              <div className='  py-1 px-2 w-auto grid rounded gap-5 grid-cols-8  justify-start max-xl:gap-1 max-xl:grid-cols-4 '>
                {info?.size[0].split(",").map((value, index) => (
                  <div
                    className={`text-[.8rem] h-10 p-2 max-xl:h-8 rounded-md ${data.size === value ? "ring-2 ring-offset-2 ring-black" : "ring-1"}`}
                    key={index + value}
                    onClick={(e) => {
                      setData({ ...data, size: value })

                    }}
                  >{value}</div>
                ))}

              </div>
            </div>
            <div className='flex flex-col '>
              <label htmlFor="Color" className='  text-[1rem]'>Color</label>
              <div className='  py-1 px-2 w-auto grid rounded gap-5 grid-cols-8 justify-start max-xl:gap-1 max-xl:grid-cols-5'>
                {info?.color[0].split(",").map((value, index) => (
                  <div
                    className={`w-10 h-10 p-2 rounded-full max-xl:w-8 max-xl:h-8 ${data.color === value ? "ring-2 ring-offset-2 ring-black" : ""}`}
                    style={{ backgroundColor: value }}
                    key={index + value}
                    onClick={(e) => {
                      setData({ ...data, color: value })
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div className='pt-2'></div>
            <button className='w-[150px] px-2 py-1 bg-black text-white rounded' 
            onClick={AddToCart}>Add Item</button>
          </div>
        </div>
      </div>
      <div className="pb-10"></div>
    </div>
  );
}
