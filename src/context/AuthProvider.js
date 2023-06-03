import { createContext , useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{
    const [auth , setAuth] = useState({});
    const [authTokens , setAuthTokens]= useState();
    const setTokens=(data)=>{
      localStorage.setItem("token" , data);
      console.log(localStorage.getItem('token'))
      setAuthTokens(data)
    }
    return (
        <AuthContext.Provider value={{auth , setAuth , authTokens, setAuthTokens:setTokens}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;