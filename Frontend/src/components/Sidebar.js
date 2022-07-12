import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'
//import { useTranslation} from "react-i18next";
import { SidebarData } from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons'

function Sidebar () {
   const [sidebar, setSidebar] = useState(false)
   const showSidebar = () => setSidebar(!sidebar)
  //const { t } = useTranslation();
    return(
        <>
        <IconContext.Provider className='side-icon' value={{color:'black'}}>
        <div>
           <Link to='#' className='menu-bars'>
           <FaIcons.FaBars onClick={showSidebar}/>
           </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={showSidebar}>
        <li className='navbar-toggle'>
          <Link to=''></Link>
            <AiIcons.AiOutlineClose/>
            
        </li>
        {SidebarData.map((item, index) =>{
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                </Link>
              </li>
            )
        })}
      </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default Sidebar