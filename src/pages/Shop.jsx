import React, { useEffect, useState } from "react";
import Products from "../components/Product";
import { useDispatch } from "react-redux"
import { changeRole } from '../redux/features/userRole'
import axios from "axios";
function SearchFilter() {
  const [open, setOpen] = useState({
    categoryIsOpen: false,
    filtreIsOpen: false,
  });
  let arr = ["All", "T-shirts", "Blouses", "Shirts", "Sweaters", "Sweaters", "Pants", "trousers", "Dresses", "Jackets", "Blazers", "Coats", "Shoes", "Sandals", "Jewelry", "Hats", "Bags"]
  return (
    <>
      <div className="pt-[70px]"></div>
      <div className="pt-10 w-screen flex justify-center flex-col items-start max-xl:pt-3 ">
        <div className="w-screen justify-center flex  max-xl:px-2">
          <button
            className="h-[50px]  border-[#222] bg-[#222] text-white border-r-white px-3 border text-[1rem] border-l rounded-l-full max-xl:text-[.8rem]"
            onClick={() => {
              setOpen({ ...open, categoryIsOpen: !open.categoryIsOpen });
            }}
          >
            <i className="bi bi-card-list"></i>
          </button>
          <input
            type="text"
            placeholder="Search"
            className=" border border-[#222]  border-l-0 text-white border-r-0 h-[50px] w-[40vw] text-[1rem] flex py-auto rounded-l-none rounded-r-none pl-5  focus:outline-none  placeholder:text-[1rem] placeholder:text-white bg-[#222] max-xl:w-full  max-xl:text-[.8rem] placeholder:max-xl:text-[.8rem]"
          />
          <button
            className="h-[50px]  border-[#222]  border-l-white bg-[#222] text-white w-[100px] border text-[1rem] border-l rounded-r-full max-xl:text-[.8rem]"
            onClick={() => {
              setOpen({ ...open, filtreIsOpen: !open.filtreIsOpen });
            }}
          >
            <i className="bi bi-sliders pr-2 max-xl:pr-[5px]"></i> Filter
          </button>
        </div>
      </div>
      {open.categoryIsOpen || open.filtreIsOpen ? (
        <div className="w-screen relative flex justify-center pt-2">
          <div className="w-[50%] relative max-xl:w-[calc(100%-10px)]">
            <div className="p-2 bg-[#222] position w-full  rounded-xl absolute top-0 ">
              {(open.categoryIsOpen) ? (

                <div className="w-full grid grid-cols-3 gap-y-1">
                  {
                    arr.map((ele) => {
                      return <div className="w-full flex justify-start items-center px-10 max-md:text-[.8rem]">
                        <input type="checkbox" name="categories" id={`${ele}`} className=" accent-white p-2 h-auto" />
                        <label htmlFor={`${ele}`} className="text-white p-2 self-start">{ele}</label>
                      </div>
                    })
                  }
                </div>
              ) : (<div className="w-full flex justify-evenly">
                <button className="text-white">Order by rating</button>
                <button className="text-white">Price low to high</button>
                <button className="text-white">Price high to low</button>
              </div>)}



            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default function Shop() {
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
        }
      })
      .catch((err) => {
        dispatch(changeRole({ role: "User", active: false }))
         
      });
  }, [dispatch])
  return (
    <div>
      <SearchFilter></SearchFilter>
      <Products></Products>
    </div>
  );
}
