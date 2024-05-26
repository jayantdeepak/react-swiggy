import { createContext, useContext, useState } from "react";

let cartContext=createContext([])

export let CartContextProvider=({children})=>{
   
    let[cartItem,setcartItem]=useState([])

    return(
        <cartContext.Provider value={{cartItem,setcartItem}}>
        {children}
        </cartContext.Provider>
    )
}




export default cartContext