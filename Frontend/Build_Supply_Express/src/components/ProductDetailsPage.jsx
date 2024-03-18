import { useParams } from "react-router-dom";
import EachProductDetail from "./EachProductDetail";
import { useEffect, useState } from "react";
import { productData } from "../static/data";
import { useSelector } from "react-redux";

const ProductDetailsPage = () => {

const {allProducts}=useSelector((state)=>state.products)

    const {name}=useParams();
    const [data,setData]=useState(null);
    const productName=name.replace(/-/g," ")
    useEffect(()=>{
        const data=allProducts?.find((i)=>i.name===productName)
        setData(data)
        // console.log(name);
    },[])
  return (
    <>
     <EachProductDetail data={data} ></EachProductDetail>
    </>
  );
};
export default ProductDetailsPage;
