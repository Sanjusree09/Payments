import React from "react";
import SideBar from "./SideBar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Merchant from "./Pages/Merchant";


function App(){
  return(
    <Router>
      <SideBar/>
      <Routes>
        <Route path="merchant" element={<Merchant/>}></Route>
      </Routes>
    </Router>
  )
}
export default App;