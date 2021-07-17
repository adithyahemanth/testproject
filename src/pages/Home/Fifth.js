import React from 'react'
import Result from '../../components/Fetch/Result'

import FetchDetails from '../../components/Fetch/FetchDetails'

function Fifth() {
    const cat1=[]
    const val = FetchDetails()
    
    const values=val.val
    
    values.map(values=>{
      if(values.id%5==0 ){
        values.catergory='thirds'
        cat1.push({id:values.id,category:values.catergory})
      }})
     
    return(
   <Result  cat1={cat1} />   
    )
}

export default Fifth
