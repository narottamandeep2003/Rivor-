import React from "react";
import { useNavigate} from "react-router-dom";

function ProductItem(data) {
  let navigate=useNavigate()
  const handleClick=()=>{
    navigate("/product/"+data.id)
  }
  return (
    <div className=" w-[100%] self-center mx-auto max-lg:w-[100%]">
      <img
        src={`${data.imgUrl}`}
        alt="...."
        className=" w-full h-[450px] object-cover object-top  max-lg:h-[50%]"
        onClick={handleClick}
      />
      <h1 className=" font-semibold text-[1.2rem] pt-2 max-sm:text-[1rem]">
      {data.title}
      </h1>
      <h3 className=" font-light text-[1rem] pt-1 pb-1 text-[#323232] max-sm:text-[.9rem] line-clamp-2">
      {data.description}
      </h3>
      <p className=" font-bold text-[1rem] max-sm:text-[.9rem] "> {data.price}$</p>
    </div>
  );
}
export default function FeaturedProduct(items) {
  console.log(items)
  return (
    <div className=" py-20 w-screen flex justify-center flex-col items-center max-lg:py-5">
      <h1 className=" w-[calc(100%-150px)] text-center font-bold text-[2rem]  uppercase pb-16  max-lg:pb-10 max-lg:w-[calc(100%-50px)] max-lg:text-[1.5rem] ">
        Featured Products
      </h1>
      <div className="grid grid-cols-4  justify-center items-center  gap-y-[5rem] gap-x-[16px]   w-[calc(100%-150px)] max-sm:grid-cols-2 max-sm:w-[calc(100%-15px)] max-sm:gap-y-[2rem] max-sm:gap-x-[.8rem] max-xl:grid-cols-2 max-xl:w-[calc(100%-15px)] max-xl:gap-y-[2rem] max-xl:gap-x-[.8rem]">
        {
          items.Items.map((val)=>{
            return <ProductItem imgUrl={val.imgUrl} key={val._id} id={val._id} title={val.title} price={val.price} description={val.description}></ProductItem>
          })
        }
      </div>
    </div>
  );
}
