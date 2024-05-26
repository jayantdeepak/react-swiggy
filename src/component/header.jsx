import { useState ,useContext} from "react"
import { NavLink } from "react-router-dom"
import usercontext from "../context/userContext"
import cartContext from "../context/cartContext"
import { lazy } from "react"



export default function Header (){
let[login,setlogin]=useState(false)


// const {loggedinuser}= useContext(userContext)
// console.log(loggedinuser)

   
function logstatus(){
        setlogin((prev)=>!prev) }
        let{cartItem}=useContext(cartContext)
let cartlenght=cartItem.lenght
    let {loggedinuser,setUser}=useContext(usercontext)
    return(<div className='header'>
  <div className='logo'>
  <img src='https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg'/>
  </div>
  <div className='navigation-div'><ul>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/about"}>about us</NavLink></li>
    <li><NavLink to={"/contact"}>contact us</NavLink></li>
    <li><NavLink to={"/grocery"}>Grocery</NavLink></li>
    <li><NavLink to={"/cart"}>cart:cartlenght</NavLink></li>
    <button onClick={logstatus}>{login?"logout":"login"}</button>
<li>{loggedinuser}</li>
    </ul>
   
  </div>
  
    </div>
  
    )
  }