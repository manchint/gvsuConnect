import React from 'react';

import './Login.css';


function Login() {
    return (
     <div className="container">
        <text className="text"><b>LOGIN</b></text>
         <div className='input'>
            <text>Email : </text>
            <input type = "text"></input>
         </div>
         <div className='input'>
            <text>Password : </text>
            <input type = "password"></input>
         </div>
        
        <button className='primary-btn'><a href='http://localhost:3000/home'>LOGIN</a></button>
        <text className='account'>Don't have an account yet?</text>
        <a className='create' href='http://localhost:3000/signup'>Create an account</a>
     </div>
    )
 }
 
 export default Login;