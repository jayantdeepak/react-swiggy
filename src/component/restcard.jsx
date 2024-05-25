export default function Restcard({details}){
    
    const{info:{name,cloudinaryImageId,id,cuisines,avgRating}}=details

  
  return(
    <div className='rest-card'>
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+ cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(",")}</h5>
      <h3>{avgRating}</h3>
      
      

    </div>
  )
}