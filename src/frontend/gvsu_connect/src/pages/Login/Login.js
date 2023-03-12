import React, { useState } from 'react';

import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

   let navigate = useNavigate();

   const [email, setEmail] = useState();
   const [password, setPassword] = useState();

   const onClickLogin = () => {
      navigate('/home');
      // axios.get('http://localhost:3001/login',{
      //       "username": email,
      //       "password": password
      //   }).then (res => {
      //       console.log(res)
      //       navigate('/home');
      //   });
      
   }
    return (
      <div className="bg-image">
         <div className="container">
            <text className="text"><b>LOGIN</b></text>
               <div className='input'>
                  <text>Username : </text>
                  <input type = "text" onChange={(e) => setEmail(e.target.value)}
                              value = {email} />
               </div>
               <div className='input'>
                  <text>Password : </text>
                  <input type = "password" onChange={(e) => setPassword(e.target.value)}
                              value = {password}/>
               </div>
            
            <button className='primary-btn' onClick={onClickLogin}>LOGIN</button>
            <text className='account'>Don't have an account yet?</text>
            <a className='create' href='http://localhost:3000/signup'>Create an account</a>
         </div>
      </div>
    )
 }
 
 export default Login;