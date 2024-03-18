import {  useSelector } from "react-redux";
import WishListData from "./WishListData";
// import { backend_url } from "../server";
// import { toast } from "react-toastify";
// import { addToCart } from "../redux/actions/cart";
// import { removeFromWishlist } from "../redux/actions/wishlist";

const Wishlist = () => {
  const {wishlist}=useSelector((state)=>state.wishlist)
  // const { cart } = useSelector((state) => state.cart);
  // const dispatch = useDispatch();




 
  return (
    <>
      <section className="pb-4">
        <div className="border rounded-5">
          <section
            className="w-100 p-5 gradient-custom"
            style={{ borderRadius: "5rem .5rem 0 0;" }}
          >
            <div className="row">
              <div className="">
                <div className="card mb-4" style={{ position: "static" }}>
                  <div className="card-header py-3">
                    <h5 className="mb-0">list - {wishlist && wishlist.length} items</h5>
                  </div>
                  <div className="card-body">
            {
              wishlist.map((i,index)=>(
                <div className="row" key={index}>
                  <WishListData data={i}></WishListData>
                   
                    </div>
                     
              ))
            }
                    

                 

                 
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
export default Wishlist;



{/* <div className="row">
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src="https://tse3.mm.bing.net/th?id=OIP.Ncz-ZOoxzxXrvaJFR6gVdAHaGi&pid=Api&P=0&h=100"
                            className="w-100"
                            alt="Blue Jeans Jacket"
                          />
                          <a href="#!">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            ></div>
                          </a>
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p>
                          <strong>Blue denim shirt</strong>
                        </p>
                        <p>Color: blue</p>
                        <p>Size: M</p>
                      </div>

                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm me-1 mb-2 w-100"
                          data-mdb-toggle="tooltip"
                          title="Remove item"
                        >
                          Remove
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm mb-2 w-100"
                          data-mdb-toggle="tooltip"
                          title="Move to the wish list"
                        >
                          Add To Bag
                        </button>

                        <p className="text-start text-md-center">
                          <strong>$17.99</strong>
                        </p>
                      </div>
                    </div> */}
