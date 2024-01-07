import React from "react";
import { useNavigate } from "react-router-dom";

function ProductItem(data) {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/product");
  };
  return (
    <div className=" w-[100%] self-center mx-auto max-lg:w-[100%] ">
      <img
        src={`${data.imgUrl}`}
        alt="...."
        className=" w-full h-[450px] object-cover object-top  max-lg:h-[50%]"
        onClick={handleClick}
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
  return (
    <div className=" py-20 w-screen flex justify-center flex-col items-center max-lg:py-5">
      <div className="grid grid-cols-4  justify-center items-center  gap-y-[5rem] gap-x-[16px]   w-[calc(100%-150px)] max-sm:grid-cols-2 max-sm:w-[calc(100%-15px)] max-sm:gap-y-[2rem] max-sm:gap-x-[.8rem] max-xl:grid-cols-2 max-xl:w-[calc(100%-15px)] max-xl:gap-y-[2rem] max-xl:gap-x-[.8rem]">
        <ProductItem imgUrl={"/assert/P4.jpg"}></ProductItem>
        <ProductItem imgUrl={"/assert/P1.jpg"}></ProductItem>
        <ProductItem imgUrl={"/assert/P2.jpg"}></ProductItem>
        <ProductItem imgUrl={"/assert/P3.jpg"}></ProductItem>
        <ProductItem imgUrl={"/assert/P4.jpg"}></ProductItem>
        <ProductItem imgUrl={"/assert/P1.jpg"}></ProductItem>
        <ProductItem imgUrl={"/assert/P2.jpg"}></ProductItem>
        <ProductItem imgUrl={"/assert/P3.jpg"}></ProductItem>
      </div>
    </div>
  );
}