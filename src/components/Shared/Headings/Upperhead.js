import React from 'react'

import './Upperhead.css'

function Upperhead() {



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


    return (
        <div>
            <div className="item-2">
      <h1 className="heading" >Dashboard</h1>
<time className="time">{weekday[day]}</time><time className="time2">{date}</time>
</div>

        </div>
    )
}

export default Upperhead
