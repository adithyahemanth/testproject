import React  from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import './Third.css'
import Result from '../../components/Fetch/Result';
import FetchDetails from '../../components/Fetch/FetchDetails';

function Third() {
    
    const cat1=[]
   // const [value,setvalue]=useState([])
    //const [loader,setloader]=useState(false)
   // const val = FetchDetails()
    /*const fetchdetails = async () =>{
      const data= await axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(result =>{
       setvalue(result.data) 
      })
      setloader(true)
    } */
    
 //   const [value,loader]=FetchDetails() 
  // console.log(value,loader)

 
    /*useEffect(()=>{
  const [values,laoder]=FetchDetails()
    setloader(laoder)
    setvalue(values)

  },[])*/
   
    
    //const values=val.val
    
    /*value.map(values=>{
      if(values.id%3===0){
        values.catergory='thirds'
        cat1.push({id:values.id,category:values.catergory})
      }})*/
return(     
  <div>
{//{loader ?  (<Result  cat1={cat1} />/*<Fetchvalue category={'third'}/>*/) : (<CircularProgress style={{color:'white',padding:'300px'}}/>) 
}
<FetchDetails category={'third'}/>
</div>
)
}
export default Third
