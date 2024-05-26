import Restcard from "./restcard"
import { useContext, useEffect, useState } from "react"
import Shimmerui from "./shimmerui"
import usercontext from "../context/userContext"
import data from "../utils/swigydata"
import { Link } from "react-router-dom"
// import usercontext from "../context/userContext"

const restlist=data.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants



export default function Body(){
    let [restData,setrestdata]=useState(null)
    let [filter,setfilter]=useState(false)
    let[search,setsearch]=useState("")
    let[modlist,setmodlist]=useState([])

    let{setUser}=useContext(usercontext)
   

    useEffect(()=>{
       fetchData()
       setmodlist(restlist)
       
    },[])

     const fetchData=async()=>{
      setTimeout(()=>{setrestdata(restlist)},250)
     }
     

    function filterTopRest(){ 
        const fr=restData.filter((rest)=>rest.info.avgRating > 4 )
        setTimeout(()=>{setmodlist(fr)},200)
        
    console.log(fr)
    setfilter(true)}

    function seeAllRest(){
        setTimeout(()=>{setmodlist(restlist)},200)
        setfilter(false)}


    function searchRest(){
       
      let searchlist= restData.filter((restaturant)=>restaturant.info.name.toLowerCase().includes(search.toLowerCase()))
      console.log(searchlist)
      setTimeout(()=>{setmodlist(searchlist)},200)
    }
    // function handleclick(){
    //   setUser()
    // }
    return(
      <div className='body'>
        <div className='serach'>
            <input onChange={(e)=>{setsearch(e.target.value)}} value={search} type="text" placeholder="seach for resturant"/>
            <button onClick={searchRest}>search</button>
          
          <button onClick={filterTopRest}>get top ratted restaturant</button>
          {filter=true? <button  onClick={seeAllRest}>see all restaurant</button>:""}
          </div>
          <input type="text"  onChange={(e)=>{setUser(e.target.value)}} placeholder="usename"/>
          
        <div className='res-container'>

         {restData
         ? 
         modlist.map(
            (restaurant)=>(<Link to={"rest/"+restaurant.info.id}>
          <Restcard key={Number(restaurant.info.id)} details={restaurant}/></Link>)
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
  