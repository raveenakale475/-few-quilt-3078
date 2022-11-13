import { useState} from "react";
import { createContext } from "react";

export const LoginSignup = createContext();

function LoginSignupProvider({ children }) {
    const [authState,SetAuthState] = useState({
        isAuth:false,
        token:null
    })

    const login=(token)=>{
                 SetAuthState({...authState,isAuth:true,token:token})
    }

    const logout=()=>{
        SetAuthState({...authState,isAuth:false,token:null})
    }
  return <LoginSignup.Provider value={{authState,login,logout}}>{children}</LoginSignup.Provider>;
}

export default LoginSignupProvider