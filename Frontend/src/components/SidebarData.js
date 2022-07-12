import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io'
//import { useTranslation} from "react-i18next";

export const SidebarData = [
    
 
    {
        title:'About Jijue',
        path:'/aboutjijue',
        cName:'nav-text'
    },
    {
        title:'Prevalence Stats',
        path:'/prevalencestats',
        cName:'nav-text'
    },
    {
        title:'Book Appointment',
        path:'/login',
        cName:'nav-text'
    },
    {
        title:'Nutrition Tips',
        path:'/nutrition',
        cName:'nav-text'
    },
    {
        title:'VCT Tracks',
        path:'/vct',
        cName:'nav-text'
    },

    {
        title:'FAQs',
        path:'/Faq',
        icon: <FaIcons.FaQuora/>,
        cName:'nav-text'
    },
    
    {
        title:'Contact Us',
        path:'/contact us',
        cName:'nav-text'
    },
]