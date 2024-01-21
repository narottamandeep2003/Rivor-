import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeRole } from '../redux/features/userRole'
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
export default function Admin() {
    const [UserHis, setUserHis] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    useEffect(() => {
        // /verify
        axios.defaults.withCredentials = true
        axios.post(`${process.env.REACT_APP_API}api/verify`, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        })
            .then((Response) => {
                // console.log(Response)
                if (Response.data.data.success&&Response.data.data.data.role==="Admin") {
                    dispatch(changeRole({ role: Response.data.data.data.role, active: true }))
                }
            })
            .catch((err) => {
                dispatch(changeRole({ role: "User", active: false }))
                navigate("/")
                 
            });
    }, [dispatch, navigate])
    useEffect(() => {
        document.querySelector('.cursor').style.backgroundColor = "black"
        gsap.to(".cursor", {
          duration: 0.5,
          scale: 1,
          ease: "power1.out",
          overwrite: "auto",
          stagger: 0.02,
        });
      }, [])
    let getData = async () => {
        axios.get(`${process.env.REACT_APP_API}api/userProduct`).then((Response) => {
            // console.log(Response)
            if (Response.data.data.success) {
                setUserHis(Response.data.data.data)
            }
        }).catch((err) => {
              
            console.log(err)
        })
    }
    useEffect(() => {
        getData()
    }, [])
    const [data, setData] = useState({
        image: null,
        title: "",
        description: "",
        price: 0,
        quantity: 0,
        color: new Set(),
        size: new Set(),
        categories: "Other"
    })

    let onFileChange = (event) => {
        setData({ ...data, image: event.target.files[0] })
    };
    let handleClickcategories = (e, p) => {
        setData({ ...data, categories: p })
    }
    let handleClickSize = (e, p) => {
        if (data.size.has(p)) {
            let temp = data.size
            temp.delete(p)
            setData({ ...data, size: temp })
        }
        else {
            let temp = data.size
            temp.add(p)
            setData({ ...data, size: temp })
        }
    }
    let handleClick = (e, p) => {
        if (data.color.has(p)) {
            let temp = data.color
            temp.delete(p)
            setData({ ...data, color: temp })
        }
        else {
            let temp = data.color
            temp.add(p)
            setData({ ...data, color: temp })
        }
    }
    const colorCodes = [
        "black",
        "red",
        "green",
        "blue",
        "yellow",
        "magenta",
        "cyan",
        "gray",
    ];
    let size = [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "UK-5",
        "UK-6",
        "UK-7",
        "UK-8",
        "UK-9",
        "UK-10",
        "UK-11",
        "UK-12",
    ]
    let categories = ["T-shirts", "Blouses", "Shirts", "Sweaters", "Pants", "trousers", "Dresses", "Jackets", "Blazers", "Coats", "Shoes", "Sandals", "Jewelry", "Hats", "Bags", "Other"]

    let handleSubmit = (e) => {
        e.preventDefault()
        if (!data.image) {
            alert("Please select an image")
            return
        }
        if (data.title === "") {
            alert("please enter a title")
            return
        }
        if (data.description === "") {
            alert("please enter a description")
            return
        }
        if (data.price === 0) {
            alert("please enter a price")
            return
        }
        if (data.quantity === 0) {
            alert("please enter a quantity")
            return
        }
        if (data.categories.size === 0) {
            alert("please select a categories")
            return
        }

        const form = new FormData();
        form.append("title", data.title)
        form.append("description", data.description)
        form.append("file", data.image)
        form.append("price", data.price)
        form.append("quantity", data.quantity)
        form.append("categories", data.categories)
        form.append("color", Array.from(data.color))
        form.append("size", Array.from(data.size))
        axios.defaults.withCredentials = true
        axios.post(`${process.env.REACT_APP_API}api/postProduct`, form).then((Response) => {
            if (Response.data.data.success) {
                setData({
                    image: null,
                    title: "",
                    description: "",
                    price: 0,
                    quantity: 0,
                    color: new Set(),
                    size: new Set(),
                    categories: "Other"
                })
                alert("done!")
            }
            else {
                alert(Response.data.data.message)
            }
        }).catch((err) => {
              
            console.log(err)
        })
        // console.log(data)
    }

    return (
        <>
            <div className='pt-[70px] w-screen flex flex-col items-center '>
                <form className='w-[calc(100vw-100px)] max-xl:w-[calc(100vw-10px)]' onSubmit={(e) => { handleSubmit(e) }}>
                    <h1 className='font-bold text-[1.2rem] pb-3 max-lg:text-center max-lg:text-[1rem]'>Add new item</h1>
                    <div className='w-full flex max-lg:flex-col'>
                        <div className='w-[40%] h-auto flex items-center justify-center flex-col max-xl:w-full' onChange={(e) => { onFileChange(e) }}>

                            {(data.image ? (<img src={URL.createObjectURL(data.image)} alt="..." className='w-full h-70vh object-cover object-center ' />) : "")}
                            <input type="file" />
                        </div>
                        <div className='pl-10 w-full max-xl:pl-0'>
                            <div className='flex flex-col'>
                                <label htmlFor="title" className=' font-bold text-[1rem]'>Title</label>
                                <input type="text" placeholder='Title' id='title' className=' border-black border-2  py-1 px-2 w-auto rounded '
                                    value={data.title}
                                    onChange={(e) => { setData({ ...data, title: e.target.value }) }}
                                />
                            </div>
                            <div className='flex flex-col pt-2'>
                                <label htmlFor="description" className=' font-bold text-[1rem]'>Description</label>
                                <textarea name="description" id="description" placeholder='description ' className='border-2 border-black py-1 px-2 w-auto rounded'
                                    value={data.description}
                                    onChange={(e) => { setData({ ...data, description: e.target.value }) }}
                                ></textarea>
                            </div>
                            <div className='flex max-xl:flex-col '>
                                <div className='flex flex-col'>
                                    <label htmlFor="Price" className=' font-bold text-[1rem]'>Price</label>
                                    <input type="number" placeholder='Price' id='Price' className='border-2 border-black  py-1 px-2 w-auto rounded'
                                        value={data.price}
                                        onChange={(e) => { setData({ ...data, price: Number(e.target.value) }) }}
                                    />
                                </div>
                                <div className='flex flex-col px-3 max-xl:px-0'>
                                    <label htmlFor="Stock" className=' font-bold text-[1rem]'>Quantity</label>
                                    <input type="number" placeholder='Quantity' id='Stock' className='border-2 border-black  py-1 px-2 w-auto rounded'
                                        value={data.quantity}
                                        onChange={(e) => { setData({ ...data, quantity: Number(e.target.value) }) }} />
                                </div>
                            </div>
                            <div className='flex flex-col '>
                                <label htmlFor="Color" className=' font-bold text-[1rem]'>Categories</label>
                                <div className='  py-1 px-2 w-auto grid rounded gap-5  justify-start grid-cols-8 max-xl:gap-1 max-xl:grid-cols-4'>

                                    {categories.map((value, index) => (
                                        <div
                                            className={`text-[.8rem] h-10 p-2 max-xl:h-8 rounded-md ${data.categories === value ? "ring-2 ring-offset-2 ring-black" : "ring-1"}`}
                                            key={index + value}
                                            onClick={(e) => {
                                                handleClickcategories(e, value)
                                            }}
                                        >{value}</div>
                                    ))}

                                </div>
                            </div>
                            <div className='flex flex-col '>
                                <label htmlFor="Color" className=' font-bold text-[1rem]'>Size</label>
                                <div className='  py-1 px-2 w-auto grid rounded gap-5 grid-cols-8  justify-start max-xl:gap-1 max-xl:grid-cols-4 '>

                                    {size.map((value, index) => (
                                        <div
                                            className={`text-[.8rem] h-10 p-2 max-xl:h-8 rounded-md ${data.size.has(value) ? "ring-2 ring-offset-2 ring-black" : "ring-1"}`}
                                            key={index + value}
                                            onClick={(e) => {
                                                handleClickSize(e, value)
                                            }}
                                        >{value}</div>
                                    ))}

                                </div>
                            </div>
                            <div className='flex flex-col '>
                                <label htmlFor="Color" className=' font-bold text-[1rem]'>Color</label>
                                <div className='  py-1 px-2 w-auto grid rounded gap-5 grid-cols-8 justify-start max-xl:gap-1 max-xl:grid-cols-5'>
                                    {colorCodes.map((value, index) => (
                                        <div
                                            className={`w-10 h-10 p-2 rounded-full max-xl:w-8 max-xl:h-8 ${data.color.has(value) ? "ring-2 ring-offset-2 ring-black" : ""}`}
                                            style={{ backgroundColor: value }}
                                            key={index + value}
                                            onClick={(e) => {
                                                handleClick(e, value)
                                            }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                            <div className='pt-2'></div>
                            <button className=' w-300px px-2 py-1 bg-black text-white rounded '>Add Item</button>
                        </div>
                    </div>
                </form>
                <div className='py-4'></div>
                <h1 className='font-bold text-[1.2rem] pb-3'>History</h1>
                <div className='py-4'></div>
                <div className='w-[calc(100vw-100px)] flex flex-col items-center max-xl:w-screen  '>
                    <div className='b w-full h-1'></div>
                    <div className=' w-full grid grid-cols-4 font-bold text-center  items-center h-[70px] max-xl:text-[1rem]'>
                        <p>Name</p>
                        <p>categories</p>
                        <p>Price</p>
                        <p>Quantity</p>
                    </div>
                    <div className='b w-full h-1'></div>
                    {
                        UserHis.map((value) => {
                            return (
                                
                                <div className='w-full' key={value._id}>
                                    <div className=' w-full grid grid-cols-4  text-center  items-center h-[70px] max-xl:text-[.9rem]'>
                                        <p>{value.title}</p>
                                        <p>{value.categories}</p>
                                        <p>{value.price}</p>
                                        <p>{value.quantity}</p>
                                    </div>
                                    <div className='b w-full h-1'></div>
                                    </div>
                                
                            )
                        })
                    }

                   

                    <div className='pb-20'></div>
                </div>

            </div>
        </>

    )
}
