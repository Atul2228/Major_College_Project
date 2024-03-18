import Button from "react-bootstrap/Button";
import { BiMessageRoundedDots } from "react-icons/bi";
import Modal from "react-bootstrap/Modal";
import styles from "./ProductDetailsCard.module.css";
import { useState } from "react";
import { IoBagHandleSharp } from "react-icons/io5";
import { backend_url } from "../server";
import { addToCart } from "../redux/actions/cart";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../redux/actions/wishlist";


function ProductDetailsCard(props) {
  const d = props.data;
  const [counter, setcounter] = useState(1);
  const [click, setClick] = useState();
  const [select, setSelect] = useState();
  const { cart } = useSelector((state) => state.cart);
  const {wishlist}=useSelector((state)=>state.wishlist)


  const dispatch = useDispatch();
  const addToCartHandler = (id) => {
  
    const isItemExists = cart && cart.find((i) => i?._id === id);
    // console.log(i);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (d.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...d, qty:counter };
        dispatch(addToCart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
   
  };

  const addToWishlistHandler = (id) => {
    const isItemExists = wishlist && wishlist.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in Wishlist!");
    } else {
     const wishlisttData = { ...d };
        // dispatch(addToCart(cartData));
        dispatch(addToWishlist(wishlisttData))

        toast.success("Item added to cart successfully!");
    }
  };

  const hanldeMessage = () => {
    console.log("clicked");
  };

  const plusOne = () => {
    setcounter(counter + 1);
  };
  const minusOne = () => {
    counter > 1 ? setcounter(counter - 1) : null;
  };
  return (
    <div>
      {d ? (
        <Modal
          {...props}
          size="lg"
          // aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <Modal.Header closeButton></Modal.Header>
            <div className="row flex-column-reverse- flex-sm-row">
              <div className="col-sm-4">
                <img
                  src={`${backend_url}${d.images && d.images[0]}`}
                  alt="Product Image"
                  className={styles.cardImage}
                />
                <div>
                  <span>
                    <b>Seller:</b>
                    {/* <img src={d.shop.url} alt="" /> */}
                  </span>
                  <span>by us</span>
                </div>
                <div>(4/5) Ratings</div>
                <div>
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={hanldeMessage}
                  >
                    Message <BiMessageRoundedDots />{" "}
                  </button>
                </div>
              </div>

              <div className="col-sm-6" style={{ width: "60%" }}>
                <div className={styles.right}>
                  <ul>
                    <li>
                      {" "}
                      <h6>{d.name}</h6>
                    </li>
                    <li>
                      <p>{d.description}</p>
                    </li>

                    <li>
                      <div>
                        <span>{d.discountPrice}$</span>
                        <span>{d.originalPrice ? d.originalPrice + "$" : null}</span>
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
                      {/* <ul className={styles.cardFuntions}> */}
                      {/* <li> */}{" "}
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => addToCartHandler(d?._id)}
                        style={{ width: "100%" }}
                      >
                        Add To Bag <IoBagHandleSharp />
                      </button>
                      {/* </li> */}
                      <li>
                        {" "}
                        <button
                          type="button"
                          className="btn btn-dark"
                          onClick={()=>addToWishlistHandler(d?._id)}
                          style={{ width: "100%" }}
                        >
                          Add To wishlist <IoBagHandleSharp />
                        </button>
                      </li>
                      {/* </ul> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      ) : null}
    </div>
  );
}
export default ProductDetailsCard;

{
  /* <div class="row">
  <div class="col-4">
    <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
      <nav class="nav nav-pills flex-column">
        <a class="nav-link" href="#item-1">Item 1</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
          <a class="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
        </nav>
        <a class="nav-link" href="#item-2">Item 2</a>
        <a class="nav-link" href="#item-3">Item 3</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
          <a class="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
        </nav>
      </nav>
    </nav>
  </div>

  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
      <div id="item-1">
        <h4>Item 1</h4>
        <p>...</p>
      </div>
      <div id="item-1-1">
        <h5>Item 1-1</h5>
        <p>...</p>
      </div>
      <div id="item-1-2">
        <h5>Item 1-2</h5>
        <p>...</p>
      </div>
      <div id="item-2">
        <h4>Item 2</h4>
        <p>...</p>
      </div>
      <div id="item-3">
        <h4>Item 3</h4>
        <p>...</p>
      </div>
      <div id="item-3-1">
        <h5>Item 3-1</h5>
        <p>...</p>
      </div>
      <div id="item-3-2">
        <h5>Item 3-2</h5>
        <p>...</p>
      </div>
    </div>
  </div>
</div> */
}
