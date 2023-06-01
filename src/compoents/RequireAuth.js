import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    console.log(auth)

    const location = useLocation();
    if(!(auth?.data)){
      return (
                <Navigate to="/login" state={{ from: location }} replace />
          
    );  
    }

    
}

export default RequireAuth;