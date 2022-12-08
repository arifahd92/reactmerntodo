import React from 'react'
import { NavLink } from 'react-router-dom'
import "./App.css"
export default function Navbar() {
  return (
   <>
   <div className="container">
  <NavLink className="item" to="/">Registration</NavLink>
  <NavLink className="item" to="/login">login</NavLink>
 
  </div>
   </>
  )
}
