import React from 'react';

import './Login.css';


function Login(props) {
    return (
     <div className="container">
        <text className="text">LOGIN</text>
        <input className="input" type = "text"></input>
        <input className="input"  type = "password"></input>
        <button className='primary-btn'>LOGIN</button>
        <text className='account'>Don't have an account yet?</text>
        <a className=''>Create an account</a>
     </div>
    )
 }
 
 export default Login;