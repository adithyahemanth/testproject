import React from 'react'
import { Line } from 'react-chartjs-2'

import 'react-circular-progressbar/dist/styles.css';
import Card from '../Shared/UI/Card';
import './Applicationcounter.css'


const Applicationcounter = () =>{

    let percentage= 80
return(

    <React.Fragment>
<div className="applcount">
        <Card style={{
            width:'600px',
            margin:'40px',
            color:'white',
            background:'black',
            height:'400px',
            transition: 'width 2s, height 4s',
            position:'relative',
            bottom:'500px'
            }}>
<div className="Totalappln">
        <h1>Total Applications</h1>
        <h1>7956</h1>
        <p className="block"style={{fontSize:'15px'}}>+3.59%</p>
  <div className="block1">      
  <Line 
      
          data={{
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'this will be hide',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                fill:true,
                lineJoin:'round',


            }]
        }}
        options= {{
            plugins: {
            legend: {
               display: false,
               fill:true,
               
            },
           
         },
         indexAxis: 'x',
         scales: {
          x: {
            beginAtZero: true
          }
        
   }
         }
         }>
</Line>
       
</div>
</div>
    
    </Card>
    </div>
    </React.Fragment>
)


}
export default Applicationcounter;