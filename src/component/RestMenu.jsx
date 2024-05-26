import  { useContext,useEffect } from 'react'
// import usercontext from '../context/userContext'
import cartContext from '../context/cartContext'

const RestMenu = ({name,description,imageId,price,isveg}) => {
  let{cartItem,setcartItem}=useContext(cartContext)

  function addtocart(){
setcartItem((prev)=>[...prev,{name,description,imageId,price},])
console.log(cartItem)
  }
  // let{loggedinuser}=useContext(usercontext)
  return (
    <div>
        <div>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/"+imageId}></img>
            
        <h1>{name}</h1>
        <h4>{description}</h4>
        <h2>{price}</h2>
        <button onClick={addtocart}> +add to cart</button>
        {/* <h4>{loggedinuser}</h4> */}
        
      </div>
    </div>
  )
}

export default RestMenu
