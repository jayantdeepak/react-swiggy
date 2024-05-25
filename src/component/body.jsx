import Restcard from "./restcard"

import data from "../utils/swigydata"
const restData=data.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants
console.log(restData)
export default function Body(){
    return(
      <div className='body'>
        <div className='serach'>
          <input placeholder='search for restraunt'></input>
          <button>searach</button>
          </div>
        <div className='res-container'>
         { restData.map((restaurant)=>(
          <Restcard key={restaurant.info.id} details={restaurant}/>))}
         
        </div>
  
      </div>
    )
  }