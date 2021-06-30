import React from 'react'
import  { CircularProgressbar } from 'react-circular-progressbar'

import 'react-circular-progressbar/dist/styles.css';
import Card from '../Shared/UI/Card';

import './Shortlisted.css'

const Shortlisted = () =>{

    let percentage= 80
return(

    <React.Fragment>

<div className="Totalappln1">
        <Card style={{width:'300px',margin:'40px',color:'white',background:'black',height:'150px' }}>
        <h1 style={{fontSize:'15px'}}>Shortlisted Candidates</h1>
        <h1 style={{fontSize:'20px'}}>7956</h1>
        
        <p className="block"style={{fontSize:'15px'}}>+3.59%</p>
  <div className="chart-1" >      
  
        <div className="progress1" >
<CircularProgressbar value={percentage} text={`${percentage}%`} />
</div>
</div>
    </Card>

    </div> 
    
       </React.Fragment>
)


}
export default Shortlisted;