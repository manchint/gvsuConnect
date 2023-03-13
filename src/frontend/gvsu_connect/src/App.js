import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing Pages
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Accommodation from './pages/Accommodation/Accommodation';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='main-container'>
      <Router>
        <Routes >
          <Route path = "/" element = {<Login />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/signup" element = {<Signup />}/>
          <Route path = "/accommodation" element = {<Accommodation />} />
          <Route path = "/home" element = {<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
