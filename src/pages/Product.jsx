import React, { useCallback, useState } from 'react'
import ProductInfo from '../components/ProductInfo'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Product() {
  const { ProductId } = useParams();
  const [info, setinfo] = useState(null)
  // let getProductInfo = 
  useCallback(
    async () => {
    axios.get(`${process.env.REACT_APP_API}api/getProductInfo/${ProductId}`).then((Response) => {
      if (Response.data.data.success) {
        // setFeaturedItem(Response.data.data.data)
        setinfo(Response.data.data.data)
      }
    }).catch((err) => {

      console.log(err)
    })
  }, [ProductId])
  // useEffect(()=>{
  //     getProductInfo();
  // },[getProductInfo])
  return (
    <div>
      <ProductInfo info={info} ></ProductInfo>
      {/* <Review></Review> */}
    </div>
  )
}
