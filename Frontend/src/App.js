import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AssessriskScreen from './screens/AssessriskScreen';
import AboutjijueScreen from './screens/AboutjijueScreen';
import HomeScreen from './screens/HomeScreen';
import PrevalenceScreen from './screens/PrevalenceScreen';
import TrackScreen from './screens/TrackScreen';
import DisclaimerScreen from './screens/DisclaimerScreen';
import Bot from './components/Bot';
import { useTranslation} from "react-i18next";
import NutritionScreen from './screens/NutritionScreen';
import ResourcesScreen from './screens/ResourcesScreen';
import FaqScreen from './screens/FaqScreen';
import ContactScreen from './screens/ContactScreen';
import i18next from 'i18next'
import AssesScreen from './screens/AssesScreen';
//import ScrollButton from './components/ScrollButton';
import { logout } from './Actions/UserActions';
import Sidebar from './components/Sidebar';
//import SSlider from './components/SSlider';
import ChatBox from './components/ChatBox';
import Booking from './screens/Booking';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AdminRoute from './components/AdminRoute';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import { useSelector, useDispatch } from 'react-redux';
import SupportScreen from './screens/SupportScreen';


//options for languages
const languages = [
  {
    code:'en',
    name:'English',
    country_code:'gb'
  },
  {
    code:'sw',
    name:'Swahili',
    country_code:'ke'
  }
]

function App() {

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
 
  const { t } = useTranslation();
  return (
    <BrowserRouter>
    <div className='grid-container'>  
      <header className='row'>
       <Sidebar/>
       
     <img src='/brand2.jpeg' style={{width:"80px", height:"45px", marginLeft:"2rem"}}  alt=''></img> 
      <Link to='/'>{t('Home')}</Link>
        <div>
        <ul className='dropdown' style={{color:'black' ,fontFamily:'Times New Roman'
      , fontWeight:'bolder' ,marginRight:'2rem'}}>{t("Language")}
        <i className="fa fa-caret-down"></i>
          {languages.map(({code, name, country_code}) =>(
            <div key={country_code}>
              <button className='dropdown-contents' onClick={() => i18next.changeLanguage(code)}>
                {name}
              </button>
            </div>
          )
          )}
     
        </ul>  
        {/* { <a href="/assessrisk">{t('Risk Assessment')}</a> } */}
       
         {/* <a href="/resources">{t('Resources')}</a> */}
        
         {/* <a href="/Faq">{t("FAQs")}</a> */}
        
         {/* <a href="/contact us">{t('Contact us')}</a>   */}
                  
      </div>
        <div>
 {userInfo ? (
              <div className="dropdown">
                Welcome <i className="fa fa-smile-o"  aria-hidden="true" style={{color:'yellow'}}></i>
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  
                 
                  <li>
                    <Link to="/" onClick={logoutHandler}>
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                Hello <i className="fa fa-smile-o"  aria-hidden="true"></i>
              
              <Link to="/login"> Log In</Link>
              </div>
            )}
      {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                  <li>
                    <Link to="/support">Support</Link>
                  </li>
                  
                </ul>
              </div>
            )}
      </div>
      </header>
      {/* <Slider/> */}
    
     
   <main>
   <div>
      <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
      
     <Routes>
         <Route path='/Support' element={<SupportScreen/>}></Route>
         <Route path='/signup' element={<SignupScreen/>}></Route>
          <Route path='/login' element={<LoginScreen/>}></Route>
          <Route path='/Booking' element={<Booking/>}></Route>
          <Route path='/disclaimer' element={<DisclaimerScreen/>}></Route>
          <Route path='/assess' element={<AssesScreen/>}></Route>
          <Route path='/faq' element={<FaqScreen/>}></Route>
          <Route path='/contactus' element={<ContactScreen/>}></Route>
          <Route path='/resources' element={<ResourcesScreen/>}></Route>
          <Route path='/nutrition' element={<NutritionScreen/>}></Route>
         <Route path="/vct" element={<TrackScreen/>}></Route>
         <Route path="/prevalencestats" element={<PrevalenceScreen/>}></Route>
          <Route path="/assessrisk" element={<AssessriskScreen/>}></Route>
          <Route path="/aboutjijue" element={<AboutjijueScreen/>}></Route>
          <Route path="/" element={<HomeScreen/>} exact></Route>
         

          <Route
              path="/userlist"
              element={
                <AdminRoute>
                  <UserListScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/user/:id/edit"
              element={
                <AdminRoute>
                  <UserEditScreen />
                </AdminRoute>
              }
            />
           </Routes>
       
  
  </ul>
      </div>
       
   </main>
  
  </div>
   <div>
           <Bot/>
         
           </div>
   <footer className='footer' >
   {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
   <i className='fa fa-copyright' 
      style={{color:"white",marginLeft:"30%"}}> 2022 Jijue,</i>
    {t(" All rights reserved. | privacy policy | Cookie policy")} 
      {/* <a href='/privacy' 
      style={{color:"white",marginLeft:"50%"}}> {t("| privay policy")}</a> */}
      {/* <a href='/privacy' 
      style={{color:"white"}}> {t("| Cookie policy")}</a>
      */}
      </footer>
      
      
    </BrowserRouter>
  );
}

export default App;
