import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {

  const { auth } = useAuth();
  const { authTokens } = useAuth();

  console.log(auth)
  console.log(authTokens)
  //localStorage.getItem('tokens')
  const isLoggedIn = window.localStorage.getItem('isLoggedIn')
  const order = window.localStorage.getItem('order')
  const location = useLocation();

  //const from = location.state?.from?.pathname ;
  if (!(isLoggedIn)) {
    return (
      <Navigate to="/login" state={{ from: location }} replace />
    )
  }

  // else if(!order){
  //   <Navigate to="/package" />
  // }
  
  else {
    return <Outlet />
  }
  // authTokens
  // ? <Outlet />
  // : <Navigate to="/login" state={{ from: location }} replace />


}

export default RequireAuth;