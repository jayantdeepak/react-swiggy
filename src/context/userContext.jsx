
import { useState,createContext} from "react"
 const usercontext=createContext({loggedinuser:""})

export const UserContextProvider=({children})=>
    {
        let [user,setUser]=useState("dd")
    return(
         <usercontext.Provider value={{loggedinuser:user,setUser,user}}>
             {children}
         </usercontext.Provider>
)
}
export default usercontext



