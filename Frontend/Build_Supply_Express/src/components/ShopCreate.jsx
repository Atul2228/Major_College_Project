// import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./SignUP.module.css";

import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { server } from "../server";
import { toast } from "react-toastify";

function ShopCreate() {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber,setPhoneNumber]=useState()
  const [address,setAddress]=useState();
  const [zipCode,setZipCode]=useState();
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const newform = new FormData();
    newform.append("file", avatar);
    newform.append("name", name);
    newform.append("email", email);
    newform.append("password", password);
    newform.append("zipCode", zipCode);
    newform.append("address", address);
    newform.append("phoneNumber", phoneNumber);
   
    axios
      .post(`${server}/shop/create-shop`, newform, config)
      .then(() => {
        toast.success("Go and check your mail for activation");
        setName("");
        setEmail("")
        setPassword("")
        setAvatar()
        setAddress("")
        setPhoneNumber("")
        setZipCode("")

      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <>
    <center>
      <div
        className={styles.loginContainer}
        style={{ boxSizing: "content-box" }}
      >
        <h4>Register as Seller</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="shop_name"
            name="shop_name"
            required
            placeholder="Shop Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
            style={{ backgroundColor: "white", width: "100%", height: "10%" }}
          />

          <input
            type="number"
            id="number"
            name="number"
            required
            placeholder="Phone Number"
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
            style={{ backgroundColor: "white", width: "100%", height: "10%" }}
          />
           <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            style={{ backgroundColor: "white", width: "100%", height: "10%" }}
          />
           <input
            type="text"
            id="address"
            name="address"
            required
            placeholder="Address"
            onChange={(event) => {
              setAddress(event.target.value);
            }}
            style={{ backgroundColor: "white", width: "100%", height: "10%" }}
          />
           <input
            type="number"
            id="zipCode"
            name="zipCode"
            required
            placeholder="Zip Code"
            onChange={(event) => {
              setZipCode(event.target.value);
            }}
            style={{ backgroundColor: "white", width: "100%", height: "10%" }}
          />
         

          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            style={{ backgroundColor: "white", width: "100%", height: "10%" }}
          />
          <div className={styles.inputFile}>
            <label htmlFor="avatar">
              {" "}
              <RxAvatar className={styles.avataricon} />
            </label>
            <input
              type="file"
              name="avatar"
              id="file-input"
              onChange={(event) => {
                handleFileInputChange(event);
              }}
              style={{
                backgroundColor: "white",
                width: "100%",
                height: "10%",
              }}
              accept=".jpg,.jpeg,.png"
            />
          </div>

          <button type="submit" className="bg-info bg-gradient">
            Register
          </button>
          <div className={styles.signUp}>
            <p>Already have an account</p>

            <Link to="/shop-login">Sign Ip</Link>
          </div>
        </form>
      </div>
    </center>
  </>
  )
}

// import React from 'react'
// import { FaUser } from "react-icons/fa";

// function ShopCreate() {
//   return (
//     <div>
// <section className="" style={{backgroundColor:"#eee",}} >
//   <div className="container ">
//     <div className="row d-flex justify-content-center align-items-center " >
//       <div className="col-lg-12 col-xl-11">
//         <div className="card text-black" style={{borderRadius: "25px",position:"static", }}>
//           <div className="card-body p-md-5">
//             <div className="row justify-content-center">
//               <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

//                 <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

//                 <form className="mx-1 mx-md-4">

//                   <div className="d-flex flex-row align-items-center mb-4">
//                   <FaUser />
//                     <div className="form-outline flex-fill mb-0">
//                       <input type="text" id="form3Example1c" className="form-control" placeholder="Your Name"/>
//                       {/* <label className="form-label" htmlFor="form3Example1c">Your Name</label> */}
//                     </div>
//                   </div>

//                   <div className="d-flex flex-row align-items-center mb-4">
//                     <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
//                     <div className="form-outline flex-fill mb-0">
//                       <input type="email" id="form3Example3c" className="form-control" />
//                       <label className="form-label" htmlFor="form3Example3c">Your Email</label>
//                     </div>
//                   </div>

//                   <div className="d-flex flex-row align-items-center mb-4">
//                     <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
//                     <div className="form-outline flex-fill mb-0">
//                       <input type="password" id="form3Example4c" className="form-control" />
//                       <label className="form-label" htmlFor="form3Example4c">Password</label>
//                     </div>
//                   </div>

//                   <div className="d-flex flex-row align-items-center mb-4">
//                     <i className="fas fa-key fa-lg me-3 fa-fw"></i>
//                     <div className="form-outline flex-fill mb-0">
//                       <input type="password" id="form3Example4cd" className="form-control" />
//                       <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
//                     </div>
//                   </div>

//                   <div className="form-check d-flex justify-content-center mb-5">
//                     <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
//                     <label className="form-check-label" htmlFor="form2Example3">
//                       I agree all statements in <a href="#!">Terms of service</a>
//                     </label>
//                   </div>

//                   <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
//                     <button type="button" className="btn btn-primary btn-lg">Register</button>
//                   </div>

//                 </form>

//               </div>
//               <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

//                 <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
//                   className="img-fluid" alt="Sample image"/>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
      
//     </div>
//   )
// }

// export default ShopCreate


export default ShopCreate
