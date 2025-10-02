import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/authContext";
import { Navigate, useLocation } from "react-router-dom";




const PrivetRoutes = ({children}) => {
    const location=useLocation();
    const {user,loading}=useContext(AuthContext);
    if(loading){
        return <p className="text-center items-center mt-12 text-5xl">Loading....</p>
    }
    if(!user){
      return  <Navigate to='/signIn' state={{ from: location }} replace></Navigate>
        
    }
    return children;
};

export default PrivetRoutes;