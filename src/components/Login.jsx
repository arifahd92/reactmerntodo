import React, { useState } from "react";
import "./App.css"
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Dashboard from "./Dashboard";
import Forgot from "./Forgot";
import Todolist from "./Todolist";


function Login() {
  const [fgt,setfgt]=useState(true)
  const [val, setval] = useState({
    emaillog: "",
    passwordlog: ""
  });
var data
let c="y"
  const navigate = useNavigate(null);
  const [dashboard, setdashboard] = useState(true);

  async function handleLogin(e) {
    e.preventDefault();
    const {emaillog,passwordlog}=val
    const res = await fetch("/login",{
        
      method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
        emaillog, passwordlog
        
        })
      
      })
 data= await res.json()//res.json wala ayrga
 c= data.message


  // console.log(res)
  if(res.status==200){
    
    swal(c)
    setdashboard(false)
  }
  else{
    swal(data.message)
  }
}
// console.log(data)

  return (
    <div>
      {dashboard ? (fgt?
        <form onSubmit={handleLogin}>
          <h1>LogIn</h1>
          <br />
          <div className="btn">
          <label>Email*</label>
          </div>
          <div className="btn">
          <br />
          <input
            type="email"
            required
            placeholder="Enter Email"
            onChange={(event) =>
              setval({ ...val, emaillog: event.target.value })
            }
          /></div>
          <br />
          <div className="btn">
          <label>Password*</label>
          </div>
  
          <div className="btn">
          <input
            type="password"
            placeholder="Enter Password"
            required
            value={val.passwordlog}
            onChange={(event) =>
              setval({ ...val, passwordlog: event.target.value })
            }
          />
          </div>
          <div className="btn">

          <span className="fgt" onClick={()=>setfgt(false)}>forgot password</span>
          </div>
          <div className="btn">
    
          <button className="logbtn" type="submit">Login</button>{" "}
          <button className="logbtn" onClick={()=>navigate("/")}>did not? register </button>{" "}
    
          </div>
        </form>
     :<Forgot email={val.emaillog}/> ) : (
        <Todolist/>
      )}
    </div>
  );
}
export default Login;