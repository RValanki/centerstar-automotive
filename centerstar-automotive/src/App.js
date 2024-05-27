import React from "react"
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NavigationBar from "./components/NavigationBar";

export default function App() {
  return (
    <div>
       <Router>
           <NavigationBar/>
           <div className="app-body">
               <Routes>
                   <Route path="/" element={<HomePage/>}/>
               </Routes>
           </div>
       </Router>
    </div>
  );
}
