import React from "react";
import { useNavigate } from "react-router-dom";
function CartItem() {
  return (
    <tr className="w-screen border-t border-b p-3 max-xl:p-1">
      <td className="  text-center flex w-full justify-center ">
        <img
          src="assert/P4.jpg"
          alt="..."
          className="w-[180px] h-[230px] object-cover object-center max-xl:h-[200px] max-xl:w-[150px]"
        />
      </td>
      <td className="   text-center max-xl:text-[.8rem] max-xl:w-auto">
        <button className=" w-[50px] h-[35px] border  border-black  max-xl:text-[.8rem] max-xl:w-auto max-xl:h-auto max-xl:p-1">-</button>
        <button className=" w-[50px] h-[35px]  border  border-black border-l-0 border-r-0  max-xl:w-auto max-xl:h-auto max-xl:p-1">
          5
        </button>
        <button className=" w-[50px] h-[35px] border  border-black max-xl:text-[.8rem] max-xl:w-auto max-xl:h-auto max-xl:p-1">+</button>
      </td>
      <td className="   text-center  text-[1.2rem] max-xl:text-[.8rem]">$500</td>
      <td className="  text-center">
        <i className="bi bi-x-lg pr-10 max-xl:pl-3"></i>
      </td>
    </tr>
  );
}
export default function Cart() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/checkout")
  }
  return (
    <>
      <div className="pt-[70px]"></div>
      <div className=" w-screen  flex max-md:flex-col-reverse">
        <div className="w-2/3 max-xl:w-screen ">
          <div className="w-full px-10 py-10 max-xl:p-0">
            <table className="w-full max-xl:w-screen">
              <thead className="pt-5 max-xl:p-0">
                <tr className="w-full max-xl:text-[1rem] max-xl:py-2">
                  <th className=" text-center">Product</th>
                  <th className="  text-center ">Quantity</th>
                  <th className="  text-center w-auto " colSpan={2} >Total price</th>
                  {/* <th className=" "></th> */}
                </tr>
              </thead>
              <tbody className=" space-y-4">
                <CartItem></CartItem>
                <CartItem></CartItem>
                <CartItem></CartItem>
                <CartItem></CartItem>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-1/3 h-[70vh]    flex justify-center items-center top-[200px] max-xl:block max-xl:w-screen max-xl:h-fit ">
          <div className="w-[80%] h-fit border p-5 bg-[#f2f2f2]  rounded-md max-xl:w-screen max-xl:text-[.9rem] ">
            <div className="text-center font-bold pb-2">
              cart Total
            </div>
            <div className="w-full flex justify-between py-1">
              <div className=" font-bold" >Total Item</div>
              <div className="w-[50px]">7</div>
            </div>

            <div className="w-full flex justify-between py-1">
              <div className=" font-bold" >sub cost </div>
              <div className="w-[50px]">$20</div>
            </div>
            <div className="w-full flex justify-between py-1">
              <div className=" font-bold" >Discount </div>
              <div className="w-[50px]">$2</div>
            </div>
            <div className="w-full flex justify-between py-1">
              <div className=" font-bold" >Tax </div>
              <div className="w-[50px]">$0</div>
            </div>
            <div className="w-full flex justify-between py-1 pb-4">
              <div className=" font-bold" >Total </div>
              <div className="w-[50px]">$18</div>
            </div>
            <button className="bg-[#222] px-3 py-2 rounded-full w-full text-white " onClick={handleClick}>CheckOut</button>
          </div>
        </div>
      </div>
    </>
  );
}
