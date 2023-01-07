import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddStudent from './students/AddStudent';
import EditStudent from './students/EditStudent';
import ViewStudent from './students/ViewStudent';
import {BrowserRouter as Navigate, Route, Routes, useLocation } from "react-router-dom"
import { useAuthContext } from './AuthContext';
import RequireAuth from './RequireAuth';
import Login from './Login';

function App() {
  const {user} = useAuthContext();
  const location = useLocation();
  const pathName = location.state?.from || '/';
  return (
    <div className="App">
      
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<RequireAuth><Home/></RequireAuth>}/>
                { user ? <Route path="/login" element={<Navigate to={pathName} />} /> : <Route path='/login' element={<Login />} /> }
                <Route exact path="/addStudent" element={<RequireAuth><AddStudent/></RequireAuth>}/>
                <Route exact path="/editStudent/:id" element={<RequireAuth><EditStudent/></RequireAuth>}/>
                <Route exact path="/viewStudent/:id" element={<RequireAuth><ViewStudent/></RequireAuth>}/>
            </Routes>          
          
    </div>
  );
}

export default App;
