import React, {useState} from 'react'
import FetchDetails from '../../components/Fetch/FetchDetails'


import './Third.css'
import Result from '../../components/Fetch/Result';

function Third() {
    
    const cat1=[]
    const val = FetchDetails()
    
    const values=val.val
    
    values.map(values=>{
      if(values.id%3==0){
        values.catergory='thirds'
        cat1.push({id:values.id,category:values.catergory})
      }})
     
    return(
   <Result  cat1={cat1} />   
    )
}

export default Third
