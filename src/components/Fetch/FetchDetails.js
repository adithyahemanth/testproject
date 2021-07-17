import React,{useState,useEffect} from 'react'
import axios from 'axios'

function FetchDetails() {
   
   
   
  const [value,setvalue]=useState({val:[],loader:true}) 
  const [loader,setloader]=useState(false)
  
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(result =>{
     setvalue({val:result.data,loader:false}) 
    })
  },[loader])

   return value;

}

export default FetchDetails
