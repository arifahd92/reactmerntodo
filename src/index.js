import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from './App';
import Approuter from './components/Approuter';
import Todolist from './components/Todolist';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>

<Approuter/>
{/* <Todolist/> */}

  </StrictMode>
);