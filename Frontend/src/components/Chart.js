import React from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis,Tooltip , Legend , 
     Bar ,ComposedChart,Area, Line} from 'recharts';
    
 const App = () =>{
     const data = [

        {name:"2019", Adults:25000 , Children:3500},
        {name:"2020", Adults:1288500 , Children:111500},
        {name:"2021", Adults:24000 , Children:3000},
        {name:"2022", Adults:12000 , Children:1200}
     ]
     const data2 = [
      {name:"2020", UpperEstimate:1700000 , LowerEstimate:1300000 , CurrentEstimate:1400000},
      {name:"2021", UpperEstimate:1700000 , LowerEstimate:1300000 , CurrentEstimate:1400000},
      {name:"2022", UpperEstimate:1700000 , LowerEstimate:1300000 , CurrentEstimate:1400000}
 
 
     ]

   
        return(
       <div>
        <p>Statistical Charts Showing Adults and children living with Hiv and Aids according to Unaids.</p>
        <BarChart width={730} height={250}  data={data2}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="LowerEstimate" fill="#82ca9d" />
      <Bar dataKey="UpperEstimate" fill="red" />
      <Bar dataKey="CurrentEstimate" fill="#FF5800" />
       </BarChart>
       <ComposedChart width={730}
        height={250} 
        data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend/>
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="" fill="#8884d8" stroke="#8884d8" />
  <Bar dataKey="Adults" barSize={20} fill="#413ea0" />
  <Line type="monotone" dataKey="Children" stroke="#ff7300" />
</ComposedChart>
      
       </div>
        );
    };
    export default App