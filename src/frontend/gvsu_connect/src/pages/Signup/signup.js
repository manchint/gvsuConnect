import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import cryptoJs from 'crypto-js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Signup() {
    let navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        'fname' : '',
        'lname' : '',
        'username' : '',
        'password' : '',
        'email' : ''
    })
    const [confirmPassword, setConfirmPassword] = useState('')

    const onClickSubmit = (e) => {
        e.preventDefault()
        if(confirmPassword === userDetails.password) {
            var headers = {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            // var ciphertext = cryptoJs.AES.encrypt(userDetails.password, 'mypassword').toString();
            var data = {
                'fname' : userDetails.fname,
                'lname' : userDetails.lname,
                'username' : userDetails.username,
                'password' : userDetails.password,
                'email' : userDetails.email
            }
            axios.post('http://localhost:3001/signup', data, headers).then (res => {
                localStorage.setItem('username', userDetails.username)
                navigate('/home');
            });
        } else {
            alert("Passwor and confrim password doesn't match");
        }
        

   }

    return (
        <div className="limiter">
        <div className="container-login100">
            <div className="login100-more" ></div>
            <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                <form classNameName="login100-form validate-form" >
                    <span className="login100-form-title pb-5">
                        Signup
                    </span>



                    <div className="wrap-input100 validate-input">                        
                        <input className="input100" type="text" name="Fname"  placeholder="First Name" required 
                            onChange={(e) => setUserDetails({...userDetails,'fname': e.target.value})}
                            value = {userDetails.fname}/>
                        <span className="focus-input100"></span>
                    </div>
                    <div className="wrap-input100 validate-input">                        
                        <input className="input100" type="text" name="Lname"  placeholder="Last Name" required 
                            onChange={(e) => setUserDetails({...userDetails,'lname': e.target.value})}
                            value = {userDetails.lname}/>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input">                        
                        <input className="input100" type="email" name="mail"  placeholder="Email" required 
                            onChange={(e) => setUserDetails({...userDetails,'email': e.target.value})}
                            value = {userDetails.email}/>
                        <span className="focus-input100"></span>
                    </div>
                    <div className="wrap-input100 validate-input">                        
                        <input className="input100" type="text" name="uname"  placeholder="User Name" required 
                            onChange={(e) => setUserDetails({...userDetails,'username': e.target.value})}
                            value = {userDetails.username}/>
                        <span className="focus-input100"></span>
                    </div>
                    <div className="wrap-input100 validate-input">                        
                        <input className="input100" type="password" name="psd"  placeholder="Password" required 
                            onChange={(e) => setUserDetails({...userDetails,'password': e.target.value})}
                            value = {userDetails.password}/>
                        <span className="focus-input100"></span>
                    </div>
                    
                     <div className="wrap-input100 validate-input">                        
                        <input className="input100" type="password" name="cpsd"  placeholder="Confirm Password" required 
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value = {confirmPassword}/>
                        <span className="focus-input100"></span>
                    </div>


                    <div className="container-login100-form-btn">
                        <div className="wrap-login100-form-btn">
                            <div className="login100-form-bgbtn"></div>
                            <button className="login100-form-btn" onClick={(e) => onClickSubmit(e)}>
                                SUBMIT
                            </button>
                        </div>
                        <span>Already have an account? | <Link to="/login">Sign in</Link></span>
                    </div>
                    
                
                    
                </form>
            </div>
        </div>
    </div>
    )
}

export default Signup;
