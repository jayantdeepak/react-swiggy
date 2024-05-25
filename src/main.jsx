import React from 'react'
import ReactDOM from "react-dom"
import Header from './component/header'
import Restcard from './component/restcard'
import Body from './component/body'


function Applayout(){
  return(
    <div className='app'>

      <Header/>
      <Body/>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Applayout/>
  
)
