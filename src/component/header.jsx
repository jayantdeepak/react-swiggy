import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Header (){
let[login,setlogin]=useState(false)
   
function logstatus(){
        setlogin((prev)=>!prev)

    }
    return(<div className='header'>
  <div className='logo'>
  <img src='https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg'/>
  </div>
  <div className='navigation-div'><ul>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/about"}>about us</NavLink></li>
    <li><NavLink to={"/contact"}>contact us</NavLink></li>
    <li>cart</li>
    <button onClick={logstatus}>{login?"logout":"login"}</button>
    </ul>
   
  </div>
  
    </div>
  
    )
  }