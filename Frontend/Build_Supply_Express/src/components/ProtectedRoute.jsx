import { Navigate } from "react-router-dom";
// import { isAuthenticated } from "../../../../Backend/middleware/auth";
const ProtectedRoute=({isAuthenticated,children})=>{
    if(!isAuthenticated){
        return <Navigate to="/login" ></Navigate>
    }
    return children
       
    

}
export default ProtectedRoute