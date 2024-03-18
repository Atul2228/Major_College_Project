import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { backend_url } from "../server";
import { removeFromCart } from "../redux/actions/cart";
import { useDispatch, useSelector } from "react-redux";

const BagProduct = ({ bagData }) => {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const {cart}=useSelector((state)=>state.cart)

  const removeFromCartHandler = (data) => {
    dispatch(removeFromCart(data));
  };


 
  // const [productTotalPrize, setProductTotalPrize] = useState(0);
  const productTotalPrize =cart.discountPrice*value
  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
          <div
            className="bg-image hover-overlay hover-zoom ripple rounded"
            data-mdb-ripple-color="light"
          >
            <img
              src={`${backend_url}${bagData?.images[0]}`}
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
            <strong>{bagData.name}</strong>
          </p>
          {/* <p>Color: blue</p> */}
          <p>${bagData.discountPrice}</p>
          {/* <button
            type="button"
            className="btn btn-primary btn-sm me-1 mb-2"
            data-mdb-toggle="tooltip"
            title="Remove item"
          >
            <i className="fas fa-trash"></i>
          </button> */}
          <button
            type="button"
            className="btn btn-danger btn-sm mb-2 w-50"
            data-mdb-toggle="tooltip"
            title="Remove from  wish list"
            onClick={()=>removeFromCartHandler(bagData)}
          >
           <MdDeleteOutline size={20}  />
          </button>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
            <button
              className="btn btn-primary px-3 me-2"
              onClick={() => {
                setValue(value === 1 ? 1 : value - 1);
              }}
            >
              -
            </button>

            <div className="form-outline">
              <input
                id="form1"
                min="0"
                name="quantity"
                value={}
                type="number"
                className="form-control"
                readOnly
              />
              <label className="form-label" htmlFor="form1">
                Quantity
              </label>
            </div>

            <button
              className="btn btn-primary px-3 ms-2"
              onClick={() => {
                setValue(value + 1);
              }}
            >
              +
            </button>
          </div>

          <p className="text-start text-md-center">
            <strong>${productTotalPrize}</strong>
          </p>
        </div>
        <hr className="my-4" />
      
        
      </div>
     
    </>
  );
};
export default BagProduct;
