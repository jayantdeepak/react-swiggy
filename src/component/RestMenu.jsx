import React from 'react'

const RestMenu = ({name,description,imageId,price,isveg}) => {
  return (
    <div>
        <div>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/"+imageId}></img>
            
        <h1>{name}</h1>
        <h4>{description}</h4>
        <h2>{price}</h2>
        
      </div>
    </div>
  )
}

export default RestMenu
