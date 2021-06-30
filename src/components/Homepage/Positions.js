import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import  { CircularProgressbar } from 'react-circular-progressbar'

import 'react-circular-progressbar/dist/styles.css';
import Card from '../Shared/UI/Card';
import './TotalApplication.css'

import './Positon.css';
const Position = () =>{

    let percentage= 80
return(

    <React.Fragment>
        <Card style={{width:'400px',left:'800px',top:'500px',position:'relative',margin:'40px',color:'white',background:'black',height:'300px',transition: 'width 2s, height 4s'}}>
<div className="Totalappln">
       <h1>Open Positions by department</h1>
                <div className="chart-1" >      
<Doughnut 
      
          data={{
            labels: ['Red', 'Blue', 'Yellow', 'Green'],
            datasets: [{
                label: 'this will be hide',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]
        }}
        options= {{
            plugins: {
            legend: {
               display: false //This will do the task
            }
              
         }}}>
</Doughnut>
        
</div>
</div>
    
    </Card>
    </React.Fragment>
)


}
export default Position;