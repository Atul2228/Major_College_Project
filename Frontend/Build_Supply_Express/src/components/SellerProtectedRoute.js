import { Navigate } from "react-router-dom";
import {useSelector} from "react-redux"


import Loader from "./Loader";

function SellerProtectedRoute({children}) {
  const {isLoading,isSeller}=useSelector((state)=>state.seller)
  if(isLoading === true){
    return(
      <Loader/>
    )}
    else{
     if(!isSeller){
    return <Navigate to={`/shop-login`}></Navigate>
  }
  return children
  

  }
 
  
}

export default SellerProtectedRoute
