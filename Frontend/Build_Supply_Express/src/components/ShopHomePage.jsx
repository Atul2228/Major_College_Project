// import React from 'react'

import { useState } from "react"
import { useSelector } from "react-redux"
import { backend_url, server } from "../server"
import { productData } from "../static/data";
import ProductCard from "./ProductCard";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function ShopHomePage() {

  const [active,setActive]=useState(1)
  const {seller} = useSelector((state)=>state.seller)
  // console.log(seller);
  const navigate=useNavigate()
  const logoutHandler=()=>{
   axios.get(`${server}/shop/logout`,{
    withCredentials:true
   })
   navigate('/')
   window.location.reload()
  }
  return (
    <>
       <div>
         <div className="container rounded bg-white mt-5 mb-5">
   <div className="row">
       <div className="col-md-3 border-right " style={{overflowY: "scroll"}}>
           <div className="d-flex flex-column align-items-center text-center p-3 py-5"> <img
                  src={`${backend_url}${seller?.avatar}`}
                  alt="loading....."
                  width="150px"
                  height="40px"
                  className="rounded-circle"
                >
                  </img><span className="font-weight-bold">hlflflksjal;j</span><span className="text-black-50">jlskfaj;llkjsl</span><span> </span>
                  </div>
                {/* <div>
                  <p style={{fontWeight:"bold"}}> Address</p>
                  <p>{seller.address}</p>
                </div>
                <div>
                  <p style={{fontWeight:"bold"}}> Phone Number</p>
                  <p> {seller.phoneNumber}</p>
                </div>
                <div>
                  <p style={{fontWeight:"bold"}}> Total Products</p>
                  <p>10</p>
                </div>
                <div>
                  <p style={{fontWeight:"bold"}}> Shop Ratings</p>
                  <p> 4/5</p>
                </div>
                <div>
                  <p style={{fontWeight:"bold"}}> Joinded On</p>
                  <p> {seller.createdAt.slice(1,10)}</p>
                </div>*/}
                <div style={{listStyle:"none",}}>
                <li style={{paddingTop:"10%",}}><button type="button" className="btn btn-dark  " style={{ width:"100%"}}>Edit Shop</button></li>
     
                 <li style={{paddingTop:"10%",}}><button type="button" className="btn btn-dark " style={{ width:"100%"}} onClick={logoutHandler}>Log Out</button></li>
                </div> 
       </div>

       
       <div className="col-md-9 border-right" >
           <div className=" py-5" >
              
           <div style={{padding:"1%", }}><div style={{ padding:"1%"}} >
          <ul className="nav justify-content-center nav-underline">
  <li className="nav-item  ">
    <p className="nav-link text-primary-emphasis "  onClick={()=>setActive(1)}>Store Product</p>
  </li>
  <li className="nav-item" style={{paddingLeft:"5%",paddingRight:"5%"}}>
    <p className="nav-link text-primary-emphasis" onClick={()=>setActive(2)}>Shop Reviews</p>
  </li>
  <li className="nav-item">
    <Link to="/dashboard">
  <button type="button" className="btn btn-dark " style={{ width:"100%"}} >DashBoard</button>
  </Link>
  </li>
 
</ul>




{
        active===1?(
          //  <div>
            
          //  {productData.map((item, index) => {
          //   return <ProductCard key={index} data={item}></ProductCard>;
          // })}
            
            
           
           
          //   </div> 
          <div>
        <div className="container">
          <div className="row my-lg-4 my-0">
            {productData.map((i,index) => (
              <ProductCard  key={index} data={i}></ProductCard>
            ))}
           
          </div>
        </div>
      </div>
           
        ):null

      
    }
    {
          active===2?(
            <div  style={{
                width: "100%",
                height: "30vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>

             No Reviews
             </div> 
             // <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error qui recusandae pariatur, dolor nostrum esse saepe inventore neque, vitae, soluta odio vel tenetur nemo natus illum laborum ducimus facere in</p>
         ):null
    }
    {
         
    }
    </div>
  
    </div>
              
             
           
           </div>
       </div>
      
   </div>
</div>
        </div>
   
  </>

  )
}

export default ShopHomePage

{/* <div className="container-fluid d-flex  justify-content-between">
<div className="col-3 bg-white rounded shadow-sm " style={{overflowY: "scroll", }}>
<div className="d-flex flex-column  text-center p-3 py-5" style={{height:"100%",width:"100%"}}> <img
                src="https://tse1.mm.bing.net/th?id=OIP.leRaZskYpTKA55a0St0tZgHaJa&pid=Api&P=0&h=220"
                alt="loading....."
                // width="150px"
                // height="40"
                className="rounded-circle align-items-center"
              ></img><span className="font-weight-bold">khfkshd</span><span className="text-black-50">lksfjlkjlk</span><span> </span></div>
</div>
<div className="col-9 rounded">
  ksfshlhdslhak
</div>
</div> */}
