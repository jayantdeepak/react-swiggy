import React, { useContext } from 'react'
import cartContext from '../context/cartContext'

const EachCartItem = ({name,description,imageId,price}) => {
    let{cartItem,setcartItem}=useContext(cartContext)
    function deleteThisItem(){
        // cartItem.filter((each)=>each.key)
let sortedcart=cartItem.filter(each=>each.name !== name)
console.log(sortedcart)
setcartItem(sortedcart)
    }
  return (
    <div>
     name: {name}<br></br>
     description:{description}<br></br>
     price:{price}<br></br>
    
      <button onClick={()=>{deleteThisItem(name)}}>-delete</button>
      <hr></hr>
    </div>
  )
}

export default EachCartItem

