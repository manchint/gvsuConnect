import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing Pages
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Main from './pages/Main/Main';
import Accommodation from './pages/Accommodation/Accommodation';


function App() {
  return (
    <div className='main-container'>
      <Router>
        <Routes >
          <Route path = "/" element = {<Login />} />
          <Route path = "/main" element = {<Main />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/signup" element = {<Signup />}/>
          <Route path = "/posts" element = {<Accommodation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
