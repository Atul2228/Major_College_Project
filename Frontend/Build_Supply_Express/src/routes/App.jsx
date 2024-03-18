// import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import {  Routes, Route, Navigate } from "react-router-dom";

import Store from "../redux/store";
import { loadSeller, loadUser } from "../redux/actions/user";
import Home from "../components/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Products from "../components/Products";
import Bag from "../components/Bag";
import Wishlist from "../components/Wishlist";
import ProductDetailsPage from "../components/ProductDetailsPage";
import ProfilePage from "../components/ProfilePage.jsx";
import Activation from "../components/Activation.jsx";
import { useSelector } from "react-redux";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import CheckoutPage from "../components/CheckoutPage.jsx";
import ShopCreate from "../components/ShopCreate.jsx";
import SellerActivation from "../components/SellerActivation.jsx";
// import ShopLogin from "../components/ShopLogin.jsx";
import ShopHomePage from "../components/ShopHomePage.jsx";
import ShopLoginPage from "../components/ShopLoginPage.jsx";
import Dashboard from "../components/DashBoard.jsx";
import ShopCreateProduct from "../components/ShopCreateProduct.jsx";
import ShopAllProducts from "../components/ShopAllProducts.jsx";
import { getAllProducts } from "../redux/actions/product.js";



function App() {
  const {isAuthenticated} =useSelector((state)=>state.user)
 const {isSeller,seller} =useSelector((state)=>state.seller)
//  const {allProducts}=useSelector((state)=>state.products)
    useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
    Store.dispatch(getAllProducts());

    if(isSeller==true)
    {
      // console.log("yes");
     return <Navigate to="/shop" replace/>
    }

  }, []);
  // console.log("yes");
  // console.log(seller,isSeller);
  // console.log(allProducts);
 



  return (
    <div>
     

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
       
      />
       <Header />
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/login" element={< Login/>} />
        <Route path="/signUp" element={< SignUp/>} />
        <Route path="/products" element={< Products/>} />
        <Route path="/bag" element={< Bag/>} />
        <Route path="/wishlist" element={< Wishlist/>} />
        <Route path="/product/:name" element={< ProductDetailsPage/>} />
        <Route path="/shop-create" element={< ShopCreate/>} />
        <Route path="/profile" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ProfilePage/>
          </ProtectedRoute>
        } />
                <Route path="/checkout" element={< CheckoutPage/>} />
         {/* <Route path="/checkout" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <CheckoutPage/>
          </ProtectedRoute>
        } /> */}

        <Route path="/activation/:activation_token" element={< Activation/>} />
        <Route path="/seller/activation/:activation_token" element={<SellerActivation/>} />
        <Route path="/shop-login" element={< ShopLoginPage/>} />
        {/* <Route path="/shop" element={
           <ProtectedRoute >
          <ShopHomePage/>
         </ProtectedRoute>
        } /> */}
        <Route path="/shop" element={<ShopHomePage />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-create-product" element={<ShopCreateProduct />} />
        <Route path="/dashboard-products" element={< ShopAllProducts/>} />


        
      
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
