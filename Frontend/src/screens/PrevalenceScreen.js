import React from 'react'
import Chart from '../components/Chart'

export default function PrevalenceScreen() {
  return (
    <div>
      <div className='container'>
        <p>General Prevalence of HIV in kenya from 1990 to 2020</p>
        <>
        <iframe src="https://data.worldbank.org/share/widget?contextual=aggregate&end=2020&indicators=SH.DYN.AIDS.ZS&locations=KE&start=1990&view=chart" width='450' height='300' frameBorder='0' scrolling="no" >

        </iframe>
        </>
      </div>
        <p>
            The Hiv virus has been for a long time a dreaded disease  that 
        </p>
        <p>
       the human race has not yet figured a sustainable cure
            to counter its spread.
        </p>
        <p>
            Statistics show that there were approximately 37.7 million people with Hiv
        </p>
        <p> across the entire globe in 2020. 36 million were adults and 1.7 million were</p>
        <p>children aged 0-14 years. more than 56% were women and girls.</p>
        <p style={{fontWeight:"bold"}}>Below is a map showing adults Hiv prevalence in Kenya</p>
        
        <div>
            <img className='imgR' src='/adults.png' alt=''></img>
        </div>
       <Chart/>
      
    </div>
    
  )
}
