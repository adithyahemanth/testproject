import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import FetchDetails from '../../components/Fetch/FetchDetails'

import Result from '../../components/Fetch/Result'

function Magic(props) {
    const cat1=[]
    //const [loader,setloader]=useState(false)
    //const [values,setvalue]=useState([])
    //const val = FetchDetails()
   /* const fetchdetails = async () =>{
      const data= await axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(result =>{
       setvalue(result.data) 
      })
      setloader(true)
    }  
  useEffect(()=>{
    fetchdetails()
  },[])
   */

    //const values=val.val
    
   // const [values,loader]=FetchDetails('magic') 
    //console.log(values,loader)



    /*values.map(values=>{
      if(values.id%3===0 && values.id%5===0 ){
        values.catergory='thirds'
        cat1.push({id:values.id,category:values.catergory})
      }})*/
     
    return(
<div>
      {//{loader ? (<Result  cat1={cat1}/>) : (<CircularProgress style={{color:'white',padding:'300px'}}/>) }
}
        <FetchDetails category={'magic'}/>  
  
  </div>
   )
}

export default Magic
