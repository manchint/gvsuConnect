import React, { useState, useRef } from 'react';
import { Link} from 'react-router-dom';

import cryptoJs from 'crypto-js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {
  
    let navigate = useNavigate();
    let emailRef = useRef();
    let passRef = useRef()

   const onClickLogin = (e) => {
        e.preventDefault()
        console.log(passRef)
        var ciphertext = cryptoJs.AES.encrypt(passRef.current.value, 'mypassword').toString();
        //navigate('/home');
        var headers = {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        var data = {
            "username": emailRef.current.value,
            "password": ciphertext
        }
        console.log(JSON.stringify(data))
        axios.post('http://localhost:3001/login',data, headers).then (res => {
                localStorage.setItem('username', emailRef.current.value)
                console.log(res)
                navigate('/home');
            });

   }
    
    return (
        <>
          
            <div className="limiter">
                <div className="container-login100">
                    <div className="login100-more" ></div>
                    <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                        <form classNameName="login100-form validate-form">
                            <span className="login100-form-title pb-5">
                                Login
                            </span>

                            <div className="wrap-input100 validate-input">
                                
                                <input className="input100" name="mail"  placeholder="Username" required 
                                    ref={emailRef}/>
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input">
                                
                                <input className="input100" type="password" name="psd"  placeholder="Password" required 
                                    ref={passRef}/>
                                <span className="focus-input100"></span>
                            </div>


                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    <button className="login100-form-btn" onClick={(e) => onClickLogin(e)}>
                                        SUBMIT
                                    </button>
                                </div>
                                <span>Don't have an account?  | <Link to="/signup">Register Here</Link> </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

