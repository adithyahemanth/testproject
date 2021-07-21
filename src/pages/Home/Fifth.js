import React from 'react'
import Result from '../../components/Fetch/Result'

import FetchDetails from '../../components/Fetch/FetchDetails'

import CircularProgress from '@material-ui/core/CircularProgress'


function Fifth() {
    const cat1=[]
/*    const [loader,setloader]=useState(false)
    const [values,setvalue]=useState([])
    //const val = FetchDetails()
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
   
  */  
    //const val = FetchDetails()
    
    //const values=val.val
   // const [values,loader]=FetchDetails() 
   // console.log(values,loader)

    
    /*values.map(values=>{
      if(values.id%5===0 ){
        values.catergory='thirds'
        cat1.push({id:values.id,category:values.catergory})
      }})*/
     
 
     return(
       <div>
{//{  loader ? <Result  cat1={cat1} />  : <CircularProgress style={{color:'white',padding:'300px'}}/>}
} 
     <FetchDetails category={'fifths'}/>
    </div>    
    )
     }

export default Fifth
