import React from 'react'


export default function AssessriskScreen() {
  
  return (
   <div className='nextpg'style={{backgroundColor:'white'}}>


       <p style={{alignItems:"center", marginLeft:"42rem" , color:"#00478f", fontSize:'35px', 
         fontWeight:"bolder"
        ,marginTop:"5rem"}}>
        WELCOME TO JIJUE
       </p>
       <p style={{marginLeft:"30rem" , fontWeight:"500"}}>Jijue is a web-based platform developed using Machine Learning technology</p>
       <p style={{marginLeft:"30rem" , fontWeight:"500" }}>to predict the risk of Hiv. Jijue is established by JKUAT sexual Health center</p>
       <p style={{marginLeft:"40rem", fontWeight:"500" }}>to provide an easy to use Hiv risk checking tool.</p>
       <a href='/disclaimer'>
       <button 

className='primaryx' style={{fontSize:"20px"}}>CHECK RISK</button>

       </a>
    </div>
        
  )
}
