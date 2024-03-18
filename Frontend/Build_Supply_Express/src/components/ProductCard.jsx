import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoBagHandle } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import ProductDetailsCard from "./ProductDetailsCard";
import { backend_url } from "../server";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../redux/actions/wishlist";
import { toast } from "react-toastify";
import { addToCart, removeFromCart } from "../redux/actions/cart";

function ProductCard({ data }) {
  const {wishlist}=useSelector((state)=>state.wishlist)
  const {cart}=useSelector((state)=>state.cart)
  const [clickh, setClickh] = useState(false);
  const [clickb, setClickb] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  // console.log(data);
  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");
  useEffect(()=>{
    if(wishlist && wishlist.find((i)=>i._id===data._id)){
      setClickh(true)
      
    }else{
      setClickh(false)
    }
    if(cart && cart.find((i)=>i._id === data._id)){
      setClickb(true)
    }else{
      setClickb(false)
    }

  },[wishlist])

  const removeFromeWishlistHandler=(data)=>{
    setClickh(!clickh)
    dispatch(removeFromWishlist(data))
  }
  const addToWishlistHandler=(data)=>{
    setClickh(!clickh)
    dispatch(addToWishlist(data))


  }
  const addToCartHandler = (data) => {
   
       
        const cartData = { ...data, qty:1 };
        setClickb(!clickb)
        dispatch(addToCart(cartData));
        toast.success("Item added to cart successfully!");
      
    

   
  };
  // const reomveFromCartHadler=(data)=>{
  //   setClickb(!clickb)
  //   dispatch( removeFromCart(data))


  // }
  const removeFromCartHandler = (data) => {
    setClickb(!clickb)
    dispatch(removeFromCart(data));
  };



  
  return (


    <>


{/* <div className="container mt-5"> */}


{/* <div className="row"> */}

  <div className="col-md-3 " style={{marginBottom:"30px"}}>




      <div className={styles.card}>
        <div className="card-body  justify-content-center ">

    
             <Link
                to={`/product/${product_name}`}
                className="card-body  justify-content-center  h-100 mt-auto "
              >
      <img src={`${backend_url}${data.images && data.images[0]}`} className="img-fluid rounded thumbnail-image"style={{borderRadius: "10px !important",width:"100%",height:"100%"}}/>
               
                
             </Link>



        
          <div className={styles.first}>
            
            <div className="d-flex justify-content-between align-items-center " >

            <span className={styles.discount}style={{marginLeft:"3%"}}>Sold {data.sold_out}</span>
            <span>               <FaRegEye
                    size={20}
                    // classNameName="cursor-pointer absolute right-2 top-5"
                    onClick={() => setOpen(!open)}
                    title="Quick View"
                  />
                  {open ? (
                    <ProductDetailsCard
                      show={open}
                      data={data}
                      onHide={() => setOpen(false)}
                    />
                  ) : null}</span>
            <span className={styles.wishlist}>
            {clickh ? (
                    <FaHeart
                      size={20}
                      color="red"
                      onClick={() => removeFromeWishlistHandler(data)}
                      // classNameName="cursor-pointer absolute right-2 top-5"
                      title="remove from wishlist"
                    />
                  ) : (
                    <FaRegHeart
                      size={20}
                      // classNameName="cursor-pointer absolute right-2 top-5"
                      onClick={() => addToWishlistHandler(data)}
                      title="Add to Wishlist"
                    />
                  )}
            </span>
            

              </div>
          </div>
          

        {/* </div> */}


        <div className="product-detail-container p-2">

            <div className="d-flex justify-content-between align-items-center">

              <h5 className={styles.name}>{data.name.length > 20
                ? data.name.slice(0, 20) + "...."
                : data.name}</h5>

              <div className="d-flex flex-column mb-2">

                <span className={styles.newPrice}> {data.originalPrice === 0 ? data.originalPrice : data.discountPrice + "$"}</span>
                <small className="old-price text-right text-muted">{data.originalPrice? data.originalPrice + "$" : null}</small>
              </div>

            </div>


            <div className="d-flex justify-content-between align-items-center pt-1">

              {/* <div className="color-select d-flex ">

                <input type="button" name="grey" className="btn creme"/>
                <input type="button" name="red" className="btn red ml-2"/>
                <input type="button" name="blue" className="btn blue ml-2"/>

              </div> */}

              {/* <div className="d-flex ">
                
                <span className="item-size mr-2 btn" type="button">S</span>
                <span className="item-size mr-2 btn" type="button">M</span>
                <span className="item-size btn" type="button">L</span>

              </div> */}
              

            </div>


            <div className="d-flex justify-content-between align-items-center pt-1  ">
              <div className="">
                {/* <i className="fa fa-star-o rating-star"></i> */}
                <FaStar color="#F6BA00" size={15} />
                <span className="rating-number ">4.8</span>
              </div>

              <span className="buy" style={{cursor:"pointer"}}>Add{clickb ? (
                    <IoBagHandle
                      size={30}
                      // classNameName="cursor-pointer absolute right-2 top-5"
                      onClick={() => removeFromCartHandler(data)}
                      title="Remove From cart"
                    />
                  ) : (
                    <IoBagHandleOutline
                      size={30}
                      // classNameName="cursor-pointer absolute right-2 top-5"
                      onClick={() => addToCartHandler(data)}
                      title="Add to cart"
                    />
                  )}</span>
              
            </div>

          

        </div>
        
      </div>
      </div>





     



      

  {/* col   */}
  </div>














  
{/* row */}
{/* </div> */}







{/* </div> */}
    </>
   
  );
}
export default ProductCard;


 // <div classNameName="col-md-3 h-100">
    //   <div classNameName={styles.block}>
    //     <div classNameName="card    my-lg-0 my-3" style={{ position: "static" }}>
    //       <div classNameName="row">
    //         <div classNameName="col-9">
    //           <Link
    //             to={`/product/${product_name}`}
    //             classNameName="card-body  justify-content-center d-flex "
    //           >
    //             <img
    //               src={`${backend_url}${data.images && data.images[0]}`}
    //               alt="card1"
    //               classNameName={styles.image}
    //             />
    //           </Link>
    //         </div>
    //         <ul classNameName="col-2 d-flex justify-content-center align-items-center ">
    //           <div classNameName={styles.options}>
    //             <li>
    //               {clickh ? (
    //                 <FaHeart
    //                   size={20}
    //                   color="red"
    //                   onClick={() => setClickh(!clickh)}
    //                   // classNameName="cursor-pointer absolute right-2 top-5"
    //                   title="remove from wishlist"
    //                 />
    //               ) : (
    //                 <FaRegHeart
    //                   size={20}
    //                   // classNameName="cursor-pointer absolute right-2 top-5"
    //                   onClick={() => setClickh(!clickh)}
    //                   title="Add to Wishlist"
    //                 />
    //               )}
    //             </li>
    //             <li>
    //               {clickb ? (
    //                 <IoBagHandle
    //                   size={20}
    //                   // classNameName="cursor-pointer absolute right-2 top-5"
    //                   onClick={() => setClickb(!clickb)}
    //                   title="Add to cart"
    //                 />
    //               ) : (
    //                 <IoBagHandleOutline
    //                   size={20}
    //                   // classNameName="cursor-pointer absolute right-2 top-5"
    //                   onClick={() => setClickb(!clickb)}
    //                   title="Add to cart"
    //                 />
    //               )}
    //             </li>
    //             <li>
    //               <FaRegEye
    //                 size={20}
    //                 // classNameName="cursor-pointer absolute right-2 top-5"
    //                 onClick={() => setOpen(!open)}
    //                 title="Quick View"
    //               />
    //               {open ? (
    //                 <ProductDetailsCard
    //                   show={open}
    //                   data={data}
    //                   onHide={() => setOpen(false)}
    //                 />
    //               ) : null}
    //             </li>
    //           </div>
    //         </ul>
    //       </div>
    //       <Link to="/">
    //         <p>By us</p>
    //       </Link>
    //       <Link to={`/product/${product_name}`}>
    //         <p>
    //           {data.name.length > 20
    //             ? data.name.slice(0, 20) + "...."
    //             : data.name}
    //         </p>
    //         <div classNameName="d-flex">
    //           <FaStar color="#F6BA00" size={20} />
    //           <FaStar color="#F6BA00" size={20} />
    //           <FaStar color="#F6BA00" size={20} />
    //           <FaStarHalfAlt color="#F6BA00" size={20} />
    //           <FaRegStar color="#F6BA00" size={20} />
    //         </div>
    //         <div classNameName="py-2 flex items-center justify-between">
    //           <div classNameName="d-flex justify-content-between">
    //             <p classNameName="small">
    //               <span classNameName="text-muted">
    //                 {" "}
    //                 {data.originalPrice === 0 ? data.originalPrice : data.discountPrice + "$"}
    //               </span>
    //             </p>
    //             <p classNameName="small text-danger">
    //               <s>{data.originalPrice? data.originalPrice + "$" : null}</s>
    //             </p>
    //             <p>sold {data.sold_out}</p>
    //           </div>
    //           {/* <div classNameName="flex">
    //             <span>
    //               {data.price === 0 ? data.price : data.discount_price + "$"}
    //             </span>
    //             <s>{data.price ? data.price + "$" : null}</s>
    //             <span classNameName="ml-70">{data.total_sell} sold</span>
    //           </div> */}
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
