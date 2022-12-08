import React, { useState } from "react";
import swal from "sweetalert";
import { useEffect } from "react";
const Todolist = () => {
  let [name, setname] = useState([]);
  let [val, setval] = useState("");
  let [updt,setupdt]=useState(true)
  let[iid,setiid]=useState(null)
  
    useEffect(()=>{
      
      mytodo()
    },[name])

    async function mytodo(){
      const res = await fetch("/getdata")
      const data = await res.json()
      setname(data)
    }

    async function gettodo() {
  if(val){
   
      const res = await fetch("/todo",{
          
        method:"post",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
          val
          
          })
        
        })
  let data= await res.json()//res.json wala ayrga
  console.log(data)
   setname([...data,val])

    setval("");
  }
  return;
}
  function removebuddy(ind) {
  // let cnf = window.confirm("are you sure")
swal("Are you sure?", {  dangerMode: true,  buttons: true,}).then((e)=>{
  console.log(`ime ${e}`)
  if(e===true){

    deleteitem(ind)
  }
})
async function deleteitem(ind){


const res = await fetch("/delete",{
      
  method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
    ind
    
    })
  
  })
  let data=await res.json()//res.json wala ayrga
  console.log(data)
   setname(data)



}

  }
 async function update(id,inp){
   setval(inp)
   setupdt(false)
   setiid(id)
 }
async function updatetodo(){
  const res = await fetch("/update",{
          
    method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
      _id:iid,
      email:val
      
      })
    
    })
    const data = await res.json()
    setname(data)
    setupdt(true)
    setval("")
 }

  return (
    <div>
      <h1>TODO LIST</h1>
    <br />
  
    <div className="btn">
      <input
      className="todoinpt"
        type="text"
        placeholder="Enter list"
        value={val}
        onChange={(e) => setval(e.target.value)}
      />

     

      {(updt?
        
        <span className="todobtn" onClick={gettodo}>➕ </span>:<span className="todobtn" onClick={updatetodo}>✔️</span>
        )
      }
       </div>
     
      
      {(name.length>0)?  name.map((elm, indx) => {
        return (
          <div className="btn">
        

          < p key={elm._id} >
            {elm.email} </p> <span className="dlt" onClick={() => removebuddy(elm._id)}>⛔</span> 
            <span className="edt" onClick={()=>update(elm._id,elm.email)}>🖊️</span>
       
      
        </div>
        );
      }):""}
    </div>
  );
};
export default Todolist;
