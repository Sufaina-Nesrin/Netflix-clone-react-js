import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React,{useContext} from 'react';
import Home from './Components/Home';
import Signup from './Components/Signup/Signup';
import './App.css';
import Login from './Components/Login/Login';



function App() {

  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;