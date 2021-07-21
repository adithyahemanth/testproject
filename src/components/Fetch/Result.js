import React,{useEffect, useState} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';

function Result(props) {

    const cat2=props.cat1
    const [intval,setinpval]=useState('')
    const [cat1,setcat2]=useState({val:[],loader:true})
    const [nothidden,setnothidden]=useState([])


    const onType = (event)=>{

        setinpval(event.target.value)
 }

    useEffect(()=>{
     setcat2({val:cat2})
    },[cat2])


const resethandler=() =>{
    setnothidden([])
    setcat2({val:cat2})
}


const Unshowhandler = (index)=>{
    
    
    nothidden.splice(index,1)
    setnothidden([...nothidden])
    
}
 return (
        <div className="cat1">


    <center> 
       <input type="text" onChange={onType}/>
    </center>
   <table>
    <tr>
           <th>id</th>
           <th>category</th>
        <th><button onClick={resethandler}>reset</button></th>
    </tr>
</table>


{  
    cat1.val.map((cat,idx) => {
            
                      if(intval===''){ 
                        
                        return (
    
                <React.Fragment key={idx}>
<table>
                
                <tr key={idx}>
                
{nothidden.indexOf(idx)===-1  && <td><p  style={{color:'white'}}>{cat.id}</p></td>} 

{nothidden.indexOf(idx)===-1    && <td><p  style={{color:'white'}}>{cat.category}</p></td>}           
{nothidden.indexOf(idx)===-1     &&<td><DeleteIcon onClick={()=>{
                var ages=  cat1.val.filter((cat1)=>{return(cat1.id !== cat.id)})                  
                  setcat2({val:ages})
                }} /></td>}
{nothidden.indexOf(idx)===-1     &&   <td><VisibilityOffIcon onClick={()=>{
                            console.log(idx)
                            console.log(nothidden)
                         if(nothidden.indexOf(idx)===-1){
                            setnothidden(hidden=>[...nothidden,idx])
                        }
                        
                        }}/></td>}
                <td><VisibilityIcon onClick={()=>{
            let index=nothidden.indexOf(idx)
            //  setindex(index)
            if(index>-1){
              Unshowhandler(index)
            }           
        }
        }
        />
        </td>        
                </tr>
                </table>                
                </React.Fragment>
                )
            }

           else if(intval==cat.id){
            console.log(nothidden)
                return (
        
                    <React.Fragment key={idx}>
                <table>
                    <tr key={idx}>
    
                    
    {nothidden.indexOf(idx)===-1    &&    <td><p  style={{color:'white'}}>{cat.id}</p></td>} 
    
    {nothidden.indexOf(idx)===-1    &&    <td><p  style={{color:'white'}}>{cat.category}</p></td>    }           
    {nothidden.indexOf(idx)===-1    &&            <td><DeleteIcon onClick={()=>{
                    var ages=  cat1.val.filter((cat1)=>{return(cat1.id !== cat.id)})                  
                      setcat2({val:ages})
                    }} /></td>}
    {nothidden.indexOf(idx)===-1    &&    <td><VisibilityOffIcon onClick={()=>{
                                console.log(idx)
                                setnothidden(hidden=>[...nothidden,idx])
                            }}/></td>}
                    <td><VisibilityIcon onClick={()=>{
                let index=nothidden.indexOf(idx)
                if(index>-1){
                    Unshowhandler(index)
                  }   
                
            }}/></td>        
                    </tr>
                    </table>
                    
                    </React.Fragment>
            )
       
    }
        })
    
    }
    

        </div>
    )

}

export default Result
