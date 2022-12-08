import React from 'react'
import swal from "sweetalert"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Forgot({email}) {
    const navigate = useNavigate(null)
    const[val,setval]=useState()
   async function getpassword(){
    
    const res = await fetch("/getpassword",{
        
      method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
     email:val
        
        })
      
      })
      const data =await res.json()
      let c = data.message
      if(res.status==200){
        swal(c)
        setTimeout(()=>{

            window.location.reload();
        },4000)
     
      }
      else{
        swal(c)
      }

   }
  return (
   <>
  <h1>Get Password</h1>
   
    <div className="btn">

  <br />
    </div>
          <div className="btn">
          <label>Email*</label>
          </div>
          <div className="btn">
          <br />
          <input
            type="email"
            required
            placeholder="Enter Registerd  Email"
            // value={email}
            onChange={(event) =>
              // setval(email)
                setval( event.target.value )
            }
            />
          </div>
          <div className="btn">
         

          <button className='fgtbtn' onClick={getpassword}>get password</button>{" "}
          <button className='fgtbtn' onClick={()=>window.location.reload()}>go to login</button>{" "}
          
          
          </div>
            
   </>
    
  )
}

export default Forgot