import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css"

import Login from "./Login";

import Registration from "./Registration";


export default function Approuter() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
     <Route
          path="/*"
          element={<h1 style={{ color: "red", margin: "30vh" }}>error</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}