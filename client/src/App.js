import React, {Fragment, useState} from "react";
import './App.css';
import {BrowserRouter as Router, 
        Routes,
        Navigate,
        Route} from "react-router-dom";

import Dashboard from "./Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from './utils/ProtectedRoutes';
function App() {

 
  const [user, setUser] = useState(null);
  return (
 
        <div className="container">
          <Router>
            <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path='login' element={<Login setUser={setUser}></Login>} />
          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
            </Routes>
          </Router>
        </div>
        
   
  );
}

export default App;
