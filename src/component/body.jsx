import Restcard from "./restcard"
import { useEffect, useState } from "react"
import Shimmerui from "./shimmerui"

import data from "../utils/swigydata"

const restlist=data.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants



export default function Body(){
    let [restData,setrestdata]=useState(null)
    let [filter,setfilter]=useState(false)

    useEffect(()=>{
       fetchdata()
       
    },[])


     const fetchdata=async()=>{
      setTimeout(()=>{setrestdata(restlist)},250)
       
        
        
     }
     

    function filtertoprest(){ 
        const fr=restData.filter((rest)=>rest.info.avgRating > 4 )
        setrestdata(fr)
    console.log(fr)
    setfilter(true)}

    function seeallrest(){setrestdata(restlist)
        setfilter(false)

    }
    return(
      <div className='body'>
        <div className='serach'>
          
          <button onClick={filtertoprest}>get top ratted restaturant</button>
          {filter=true? <button  onClick={seeallrest}>see all restaurant</button>:""}
          </div>
        <div className='res-container'>

         {restData
         ? 
         restData.map(
            (restaurant)=>(
          <Restcard key={restaurant.info.id} details={restaurant}/>)
        )
        :<>
        <Shimmerui/><Shimmerui/><Shimmerui/><Shimmerui/>
        <Shimmerui/><Shimmerui/>
        <Shimmerui/><Shimmerui/>
        <Shimmerui/><Shimmerui/>
        <Shimmerui/><Shimmerui/>
        </>
        }
         
        </div>
  
      </div>
    )
  }