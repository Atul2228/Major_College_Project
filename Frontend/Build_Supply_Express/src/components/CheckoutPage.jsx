// import  from 'react'

// function CheckoutPage() {
//   return (
//   <>

  
//   </>
//   )
// }

// export default CheckoutPage


import React, { useState, useEffect } from "react";
// import { Country, State } from "country-state-city";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import axios from "axios";
import { server } from "../server";
import { toast } from "react-toastify";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Checkout = () => {
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [userInfo, setUserInfo] = useState(false);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipCode, setZipCode] = useState(null);
  const [couponCode, setCouponCode] = useState("");
  const [couponCodeData, setCouponCodeData] = useState(null);
  const [discountPrice, setDiscountPrice] = useState(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Functions remain unchanged
  // ...

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-8">
          <ShippingInfo
            // Props remain unchanged
            // ...
          />
        </div>
        <div className="col-md-4 mt-4 mt-md-0">
          <CartData
            // Props remain unchanged
            // ...
          />
        </div>
      </div>
      <div className="mt-4 d-flex justify-content-center">
        <button className="btn btn-primary w-50" /*onClick={paymentSubmit}*/ >Go to Payment</button>
      </div>
    </div>
  );
};

const ShippingInfo = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Shipping Address</h5>
        <form>
        <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">Country</label>
    <select id="inputState" className="form-select">
      {/* <option selected>Country</option> */}
      <option>India</option>
    </select>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      {/* <option selected>Country</option> */}
      <option>Uttar Pradesh</option>
    </select>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address 1</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">Adress Type</label>
    <select id="inputState" className="form-select">
     
     
    </select>
  </div>
    

  </div>
          <div className="mt-3">
            <button type="button" className="btn btn-link" /*onClick={() => setUserInfo(!userInfo)}*/ >
              Choose From saved address
            </button>
            {/* Conditional rendering and user addresses logic remain unchanged */}
            ...
          </div>
        </form>
      </div>
    </div>
  );
};

const CartData = () => {
  return (
    <div className="card">
      <div className="card-body">
        {/* Adjusted layout and styling */}
        ...
        <form /*onSubmit={handleSubmit}*/>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Coupon code"
              // value={couponCode}
              // onChange={(e) => setCouponCode(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Apply Code</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

