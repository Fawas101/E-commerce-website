import React from 'react'
import Sidebar from '../SideBar/Sidebar'



const Dashbord = () => {
  return (
    <div style={{display:'flex'}}>
      
       <Sidebar/>

       <div
        style={{flex:"1",
        alignItems:'center',
        marginTop:'400px',
        marginLeft:'100px',
        fontWeight:'500'
      }}>
       <h3 style={{textAlign:'center'}}> Hey Guys</h3>  
      </div> 
      
    
    </div>
  )
}

export default Dashbord
