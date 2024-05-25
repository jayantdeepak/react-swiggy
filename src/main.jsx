import React from 'react'
import ReactDOM from "react-dom/client"
import Header from './component/header'
import Restcard from './component/restcard'
import Body from './component/body'
import {createBrowserRouter} from "react-router-dom"
import Error from './component/Error'
import Aboutus from './component/aboutus'
import Contact from './component/Contact'
import { RouterProvider } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import RestInfo from './component/RestInfo'

const router=createBrowserRouter([
  
   { path:"/",
    element:<Applayout/>,
    children:
    [
      {path:"/",
      element:<Body/>
      },
      {
        path:"/about",
        element:<Aboutus/>
      },
      {
        path:"/contact",
      element:<Contact/>
      },
      {
        path:"/rest/:resid",
        element:<RestInfo/>

      }
    ],
    errorElement:<Error/>,
  }
]
)


function Applayout(){
  return(
    <div className='app'>

      <Header/>
     <Outlet/>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  
)
