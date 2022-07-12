import React from 'react'

export default function DisclaimerScreen() {
  return (
    <div>
        <p style={{fontWeight:"bold",fontSize:"25px",color:"#00478f",marginLeft:"30rem"}}>Privacy</p>
        <p style={{marginLeft:"30rem" , fontWeight:"500"}}>Jijue website does not collect any of your sensitive information.The data you</p>
        <p style={{marginLeft:"30rem" , fontWeight:"500"}}>provide is only used by our machine learning model to generate your risk score.</p>
        <p style={{marginTop:"2rem",marginLeft:"30rem", color:"#00478f", fontWeight:"bold",fontSize:"25px"}}>Disclaimer</p>
        <p style={{marginLeft:"30rem" , fontWeight:"500"}}>The risk score generated is not a fully reliable diagnosis and we by no means hereof give</p>
        <p style={{marginLeft:"30rem" , fontWeight:"500"}}>you professional health assessment. Please get professional advice from your personal health doctor</p>
        <p style={{marginLeft:"30rem" , fontWeight:"500"}}>or hospital. continue with the assessment test at your assent.</p>
        <a href='/'>
        <button className='primaryx' style={{marginLeft:"30rem",color:"white"}}>Decline</button>
        </a>
        <a href='http://127.0.0.1:8000/'>
       <button 

className='primaryx' style={{marginLeft:"45rem"}}>Continue</button>

       </a>
    </div>
  )
}
