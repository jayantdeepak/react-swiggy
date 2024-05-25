import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../utils/swigydata"
import Shimmerui from "./shimmerui"
import RestMenu from './RestMenu'

const restlist=data.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants

// console.log(restlist)
const RestInfo = () => {
    let [Info,setInfo]=useState(null)
    let restid=useParams()
    let str = String(restid.resid)
    let thisRest=restlist.filter((item)=>item.info.id == str)
    console.log(thisRest)
    useEffect(async()=>{
      
      let data=await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId="+thisRest[0].info.id)
   let jsondata=await data.json()
   console.log(jsondata)
   
      
  },[])
    
    useEffect(async()=>{
        const data= await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=174979")
        const jsondata=  await data.json()

        let recomendation=jsondata.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
        // let str = restid.resid.toString()
    // let thisRest=restlist.filter((item)=>item.info.id == str)
    
    // console.log(thisRest)
    // console.log(recomendation)
    setTimeout(()=>{setInfo(recomendation)},200)
     },[])
    

   
  return (!Info?<><Shimmerui/></>:
    <div>
    {Info.map((each)=><RestMenu key={Number(each.card.info.id)}
     description={each.card.info.description}
      name={each.card.info.name}
      price={each.card.info.price/100}
      isveg={each.card.info.isVeg}
      imageId={each.card.info.imageId}/>)}
   
      
    </div>
  )
}

export default RestInfo
