import React from 'react';
import {Link} from 'react-router-dom';
//import "slick-carousel/slick/slick.css"; 
//import LoadingBox from '../components/LoadingBox';
import { useTranslation} from "react-i18next";
import { Carousel } from 'react-responsive-carousel';
//import MessageBox from '../components/MessageBox';
export default function HomeScreen() {
  
  const { t } = useTranslation();
  
  return (
   
    <div className='grid-container'> 
     <div > 
     <img className='brand-home' src='/home.jpeg' alt=''></img>
          </div>
    <div className='row' style={{display:"flex" , justifyContent:"center"}}>
            
    </div>
        <div>
      </div>
        <div>
      <div className='home title'>
           <p style={{marginLeft:"100px", fontSize:"35px", fontWeight:"bolder" ,marginTop:'0rem'}}>{t('LEAVE')}</p>
      <p style={{marginLeft:"100px", fontSize:"35px", fontWeight:"bolder",marginTop:'0.3%'}}>{t('WORRIES BEHIND')}</p>
      <p className='home_title' style={{marginLeft:"100px", fontSize:"35px", fontWeight:"bolder", marginTop:'0.3%',color:"#00478f"}}>{t("WITH HIV RISK")}</p>
      <p  style={{marginLeft:"100px", fontSize:"35px", fontWeight:"bolder", color:"#00478f",marginTop:'0.3%'}}>{t("ASSESSMENT")}</p>
      </div>
      <a href={t('/assessrisk')}>
       <button className='primaryZ' 
       style={{fontWeight:'bolder', margin:'1rem',marginLeft:"100px",fontSize:'2rem'}}
       >{t("Assess my risk")}</button>
       </a>
      
     
      
      </div>
      </div>
     
  
  )
}
