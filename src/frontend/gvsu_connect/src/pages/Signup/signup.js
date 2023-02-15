import React from 'react';

import './signup.css';


function Signup(props) {
    return (
     <div className="container">
        <text className="text"><b>SIGNUP</b></text>
        <div className='input'>
            <text>First Name : </text>
            <input type = "text"></input>
         </div>
         <div className='input'>
            <text>Last Name : </text>
            <input type = "text"></input>
         </div>
         <div className='input'>
            <text>Email : </text>
            <input type = "text"></input>
         </div>
         <div className='input'>
            <text>Password : </text>
            <input type = "password"></input>
         </div>
         <div className='input'>
            <text>Confirm Password : </text>
            <input type = "password"></input>
         </div>
        <button className='primary-btn'>SIGN UP</button>
        <text className='account'>Already a user?</text>
        <a className='create' href='http://localhost:3000/login'>Login</a>
     </div>
    )
 }
 
 export default Signup;