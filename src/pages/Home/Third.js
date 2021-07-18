import React, {useState,useEffect} from 'react'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress'

import './Third.css'
import Result from '../../components/Fetch/Result';

function Third() {
    
    const cat1=[]
    const [value,setvalue]=useState([])
    const [loader,setloader]=useState(false)
   // const val = FetchDetails()
    const fetchdetails = async () =>{
      const data= await axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(result =>{
       setvalue(result.data) 
      })
      setloader(true)
    }  
  useEffect(()=>{
    fetchdetails()
  },[])
   
    
    //const values=val.val
    
    value.map(values=>{
      if(values.id%3===0){
        values.catergory='thirds'
        cat1.push({id:values.id,category:values.catergory})
      }})
return(     
  <div>
{loader ?  (<Result  cat1={cat1} />) : (<CircularProgress style={{color:'white',padding:'300px'}}/>) 
}
</div>
)
}
export default Third
