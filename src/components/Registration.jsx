import React, { useState } from "react"
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import "./App.css"
import Otp from "./Otp";
function Registration() {
  const navigate = useNavigate(null);
  const [otp,setotp]=useState(true)
  const [val, setval] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });
  async function handdlesubmit(e) {
    e.preventDefault();

    let psd = document.getElementById("psd").value;
    if (psd.length < 8) {
      swal({
        icon: "error",
        title: "Oops...",
        text: 'password length should not be less than 8',
      });
      return;
    } else {
      for (var i = 0; i < psd.length; i++) {
        var ch = psd.charAt(i);
        if (!isNaN(ch * 1)) {
          var number = 1;
          console.log("no.found");
        } else if (
          ch === ch.toUpperCase() &&
          ch !== "@" &&
          ch !== "/" &&
          ch !== "!" &&
          ch !== "$" &&
          ch !== "#" &&
          ch !== "%" &&
          ch !== "*"
        ) {
          var uppercase = 1;
          // console.log("upper case found");
        } else if (
          ch === ch.toLowerCase() &&
          ch !== "@" &&
          ch !== "/" &&
          ch !== "!" &&
          ch !== "$" &&
          ch !== "#" &&
          ch !== "%" &&
          ch !== "*"
        ) {
          var lowercase = 1;
          // console.log("lower case found");
        } else {
          var spl = 1;
          // console.log("spl case found");
        }
      }
    }
    if (spl && lowercase && uppercase && number) {
      console.log(val)
      const {name,email,password,phone}=val
       console.log(name)
      
       swal(
        "otp has been sent on your email"
          );
          setotp(false)
         const res = await fetch("/otp",{
           
          method:"post",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
          email
          
          })
           
        })
        return
        const data=await res.json()
        console.log(data.message)
       console.log("outside")
       if(res && res.status==200){
       swal(
        data.message
         );
       navigate("/login");
      }
      else{
        swal(
          "sorry something went wrong"
           );
      }
    } else {
      swal(
     "The password must contain an uppercase a lowercase a spacial charactor and a number"
      );
    }
    

    
  }
 function handleClick() {
    navigate("/login");
  }
return (
    <>{
      otp?
    
      <div>
        <form onSubmit={handdlesubmit} >
            <h1>Register</h1>
             <div className="btn">
                  <br />
            <label>Name*</label>
             </div>
    

            <div className="btn">

            <input
              type="string"
              required
              placeholder="Enter Full Name"
              value={val.name}
              onChange={(event) => setval({ ...val, name: event.target.value })} name="name"
            />
            </div>
    
            <div className="btn">

            <label>Email*</label>
            </div>
    
            <div className="btn">

            <input
              type="string"
              required
              placeholder="Enter email"
              value={val.email} name="email"
              onChange={(event) =>
                setval({ ...val, email: event.target.value })
              }
            />
            </div>
    
            <div className="btn">

            <label>Password*</label>
            </div>
    
            <div className="btn">

            <input
              type="password"
              required
              id="psd" name="password"
              placeholder="Enter password"
              onChange={(event) =>
                setval({ ...val, password: event.target.value })
              }
            />
            </div>
    
            <div className="btn">

            <label>Phone No.</label>
            </div>
    
            <div className="btn">

            <input
              type="number" name="phone"
              placeholder="Enter contact no"
              onChange={(event) =>
                setval({ ...val, phone: event.target.value })
              }
            />
            </div>
            <div className="btn">

            <button className="logbtn" type="submit">Register</button>{" "}
          <button className="logbtn" onClick={()=>navigate("/login")}>Go to login</button>{" "}
            </div>
          
          </form>
        
      </div>
:<Otp vall={val}/>}
    </>
  );
}
export default Registration;