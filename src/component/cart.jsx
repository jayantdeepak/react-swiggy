import React from 'react'
import { useContext } from 'react'
import cartContext from '../context/cartContext'
import EachCartItem from './eachCartItem'
import Shimmerui from './shimmerui'


const Cart = () => {

    let{cartItem}=useContext(cartContext)
    console.log(cartItem)
  return (
    <div>{cartItem.length<=0?"cart in empty":
        cartItem.map((each)=>
            // <span>{each.name}</span>
    <EachCartItem  name={each.name} description={each.description} imageId={each.imageId} price={each.price}/>)
    
    }
      
    </div>
  )
}

export default Cart
