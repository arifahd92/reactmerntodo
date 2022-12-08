import React from 'react'
import swal from "sweetalert"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Otp({vall}) {
    const navigate = useNavigate(null)
    const[otp,setotp]=useState("")
    console.log("from verification",vall.email)
    
    console.log(typeof(vall))
   async function resendotp(){
      let email=vall.email
      const res = await fetch("/resendotp",{
        method:"post",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
           email
          
          })
        
        })
       let  data= await res.json()//res.json wala ayrga
       let  c= data.message
        console.log(data,c)
        swal(c)

    }

   async function getpassword(){
    let email=vall.email
   let password=vall.password
    let name=vall.name
    let phone=vall.phone
    console.log(name,email,phone)
    

    const res = await fetch("/registration",{
      method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
     name,email,phone,password,otp
        
        })
      
      })
      const data =await res.json()
      let c = data.message
      if(res.status==200 && c != "otp didnot matched"){
        swal(c)
        setTimeout(()=>{
   navigate("/login")
        },2000)
     
      }
      else{
        swal(c)
      }

   }
  return (
   <>
  <h1>Otp verification</h1>
   
    <div className="btn">

  <br />
    </div>
          <div className="btn">
          <label>Email*</label>
          </div>
          <div className="btn">
          <br />
          <input
            type="Email"
            required
            placeholder="bhujij"
             value={vall.email}
            />
          </div>
          <div className="btn">
          <label>Otp*</label>
          </div>
          <div className="btn">
          <br />
          <input
            type="number"
            required
            placeholder="Enter otp"
            onChange={(event) =>
                setotp( event.target.value )
            }
            />
          </div>
          <div className="btn">

<span className="fgt" onClick={resendotp}>resend otp</span>
</div>
          <div className="btn">
         

          <button className='fgtbtn' onClick={getpassword}>Verify</button>{" "}
          <button className='fgtbtn' onClick={()=>window.location.reload()}>go to login</button>{" "}
          
          
          </div>
            
   </>
    
  )
}

export default Otp