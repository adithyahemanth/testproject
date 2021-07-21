import React, {useState,useEffect} from 'react'
import axios from 'axios'

import Result from './Result'

function FetchDetails(props) {
   
   
   
  const [value,setvalue]=useState([]) 
  const [loader,setloader]=useState(false)
  const cat1=[]
  const cat2=[]
  const cat3=[]
  
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(result =>{
     setvalue(result.data) 
    })
    setloader(true)
  },[loader])

   value.map(value=>{
        if(value.id%3===0){
          
         value.catergory='thirds'
          cat1.push({id:value.id,category:value.catergory})
        }
        
         if(value.id%5===0){
          value.catergory='fifths'
          cat2.push({id:value.id,category:value.catergory})
        
        }
         if(value.id%3===0 && value.id%5===0) {
        
          value.catergory='magic'
          cat3.push({id:value.id,category:value.catergory})
        
        }
   
      })


      if(props.category=='third'){
        return <Result cat1={cat1}/>
      }
      else if(props.category=='fifths'){
        return <Result cat1={cat2}/>
      }
      else if(props.category=='magic'){
        return <Result cat1={cat3}/>
      }
}

export default FetchDetails
