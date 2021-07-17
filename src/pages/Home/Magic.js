import React,{useState,useEffect} from 'react'
import DeleteIcon from '@material-ui/icons/Delete'; 

import FetchDetails from '../../components/Fetch/FetchDetails'

import Result from '../../components/Fetch/Result'

function Magic(props) {
    const cat1=[]
    const val = FetchDetails()
    
    const values=val.val
    
    values.map(values=>{
      if(values.id%3==0 && values.id%5==0 ){
        values.catergory='thirds'
        cat1.push({id:values.id,category:values.catergory})
      }})
     
    return(
   <Result  cat1={cat1} />   
    )
}

export default Magic
