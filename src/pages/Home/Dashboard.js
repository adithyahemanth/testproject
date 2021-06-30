import React from 'react'
import { Link } from 'react-router-dom';

import TotalApplication from '../../components/Homepage/TotalApplication';
import Shortlisted from '../../components/Homepage/Shortlisted';
import Position from '../../components/Homepage/Positions';
import Applicationcounter from '../../components/Homepage/Applicationcounterpage';
import MiniDrawer from '../../components/Shared/navigation/SideDrawer'

import './Dashboard.css'


const Dashboard = (props) =>{


    const date=new Date().toLocaleDateString()
    
    const day=new Date().getDay();
   
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return(
<React.Fragment>
  <MiniDrawer/>
  <main style={{backgroundColor:'black',backgroundSize:'auto'}}>
<div className="item-2">
      <h1 className="heading" >Dashboard</h1>
<time className="time">{weekday[day]}{date}</time>
</div>
<div className="Dashboard-class">
<button className="btn1">+ Add</button>
<input type="text" className="inp1" placeholder="search for Application here"></input>
    <div className ="components">
    <TotalApplication/> 
    </div>
    <div className ="components">
    <Shortlisted/></div>
    <Position/>
    <Applicationcounter/>
    </div>
    </main>
    </React.Fragment>
 
    );
}

export default Dashboard