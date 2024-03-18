import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import { BiMessageRoundedDots } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

import styles from "./EachProductDetail.module.css";

import { IoBagHandleSharp } from "react-icons/io5";
import { backend_url } from "../server";

import { toast } from "react-toastify";
import { addToCart } from "../redux/actions/cart";
import { addToWishlist } from "../redux/actions/wishlist";

const EachProductDetail=({data})=>{
    const [count,setCount]=useState(1)
    const [click,setClick]=useState(false)
    const [select,setSelect]=useState(0)
    const [counter, setcounter] = useState(300);
    const { cart } = useSelector((state) => state.cart);
    const {wishlist}=useSelector((state)=>state.wishlist)
    const navigate=useNavigate()

    const dispatch = useDispatch();

    const addToWishlistHandler = (id) => {
      const isItemExists = wishlist && wishlist.find((i) => i._id === id);
      if (isItemExists) {
        toast.error("Item already in cart!");
      } else {
       const wishlisttData = { ...data  };
          // dispatch(addToCart(cartData));
          dispatch(addToWishlist(wishlisttData))

          toast.success("Item added to cart successfully!");
      }
    };



    

    const addToCartHandler = (id) => {
      const isItemExists = cart && cart.find((i) => i._id === id);
      if (isItemExists) {
        toast.error("Item already in cart!");
      } else {
        if (data.stock < 1) {
          toast.error("Product stock limited!");
        } else {
          const cartData = { ...data, qty: count };
          dispatch(addToCart(cartData));
          toast.success("Item added to cart successfully!");
        }
      }
    };
   
    const hanldeMessage = () => {
        console.log("clicked");
      };
    
      const plusOne = () => {
        setcounter(counter + 1);
      };
      const minusOne = () => {
        counter > 300 ? setcounter(counter - 1) : null;
      };


    return(
    <div>
        {
            data?(
                <div>
                <div className="row flex-column-reverse- flex-md-row">
              <div className="col-sm-4">
               <center> <img
                  // src={data.image_Url[select].url}
                  alt="Product Image"
                  className={styles.cardImage}
                /> </center>
                <div className="row flex">
                    <div className="col-4" style={{width:"2px"}}><img src={`${backend_url}${data.images && data.images[0]}`}style={{width:"200px"}} alt="" onClick={()=>setSelect(0)}/></div>
                    {/* <div className="col-4"style={{width:"2px"}}><img src={`${backend_url}${data.images && data.images[0]}`} style={{width:"200px"}}alt="" onClick={()=>setSelect(1)}/></div> */}
                </div>
                {/* <div>
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={hanldeMessage}
                  >
                    Message <BiMessageRoundedDots />{" "}
                  </button>
                </div> */}
              </div>

              <div className="col-sm-6 w-70" >
                <div className={styles.right}>
                  <ul>
                    <li>
                   
                      <h5>{data.name}</h5>
                    </li>
                    <li>
                      <p>{data.description}</p>
                    </li>

                    <li>
                      <div>
                        <span>{data.discountPrice}$</span>
                        <span>{data.originalPrice ? data.originalPrice + "$" : null}</span>
                      </div>
                    </li>
                    <li>
                      <div className={styles.Button}>
                        <span>
                          <button className="bg-info" onClick={minusOne}>
                            -
                          </button>
                        </span>
                        <span>
                          <input
                            type="text"
                            value={counter}
                            readOnly
                            min={300}
                          />
                        </span>
                        <span>
                          <button className="bg-info" onClick={plusOne}>
                            +
                          </button>
                        </span>
                      </div>
                    </li>
                    <li>
                     
                      <button
                        type="button"
                        className="btn btn-dark"
                        // onClick={hanldeMessage}
                        style={{ width: "60%" }}
                        onClick={() => addToCartHandler(data._id)}
                      >
                        Add To Bag <IoBagHandleSharp />
                      </button>
                    </li>
                    <li>
                       
                        <button
                          type="button"
                          className="btn btn-dark"
                         onClick={() =>addToWishlistHandler(data._id)}
                          style={{ width: "60%" }}
                        >
                          Add To list <IoBagHandleSharp />
                        </button>
                    </li>
                    <li>
                        <img src={`${backend_url}${data?.shop?.avatar}`}  width="40"
                  height="40"
                  className="rounded-circle" alt="" />
                        
                            <p className={styles.shopInfo}>{data.shop.name}</p>
                            <p className={styles.shopInfo}>(4/5) Ratings</p>
                            <button
                        type="button"
                        className="btn btn-info"
                        onClick={hanldeMessage}
                      
                      >
                       Message
                      </button>

                       
                
                        
                    </li>
                     
                    
                  </ul>
                </div>
              </div>
            
            </div>
            <ProductDetailsInfo data={data}></ProductDetailsInfo>
            
            </div>
            
            
             
            ):null
        }
    </div>
    )
}
const ProductDetailsInfo=({data})=>{
    const [active,setActive]=useState(1)
   return (
   <div style={{padding:"2%"}}><div style={{ backgroundColor:"#f5f6fb",padding:"2%"}} className={styles.info}>
          <ul className="nav justify-content-center nav-underline">
  <li className="nav-item  ">
    <p className="nav-link text-primary-emphasis "  onClick={()=>setActive(1)}>Product Details</p>
  </li>
  <li className="nav-item" style={{paddingLeft:"18%",paddingRight:"18%"}}>
    <p className="nav-link text-primary-emphasis" onClick={()=>setActive(2)}>Product Reviews</p>
  </li>
  <li className="nav-item">
    <a className="nav-link text-primary-emphasis"  onClick={()=>setActive(3)}>Seller Details</a>
  </li>
 
</ul>




{
        active===1?(
           <>
            <div>{data?.description}</div>
            {/* <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus animi libero laudantium, dolores quas quae inventore nihil consequatur velit odio consectetur tempore accusamus modi sit deleniti, nobis tempora earum.</div> */}
            </> 
            // <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error qui recusandae pariatur, dolor nostrum esse saepe inventore neque, vitae, soluta odio vel tenetur nemo natus illum laborum ducimus facere in</p>
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
          active===3?(
            <>
            <div className="row">
            
            <div className="d-flex">
            
            <div className={styles.sellinfo}>
               <ul className=" w-50 "> 
               <img src={`${backend_url}${data?.shop?.avatar}`}  width="40"
                  height="40"
                  className="rounded-circle " alt="" />
                    <li>
                    {data.shop.name}
                    </li>
                    <ul>
                    <li><p>(4/5) Ratings</p></li>
                    </ul>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit commodi deleniti voluptatem! Quasi eaque amet corporis, aliquam et inventore vitae sequi optio exercitationem temporibus atque debitis aliquid quis! Enim, nulla?</div>
                    </ul> 
               
            </div>
                </div>
               
               
                
               

                    </div>
             </> 
          
         ):null
    }
    </div>
  
    </div>
   )
   
}
export default EachProductDetail

