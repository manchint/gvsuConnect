import React from 'react';
import {Link} from 'react-router-dom';


function Signup() {
    
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
                        <input className="input100" type="text" name="Fname"  placeholder="First Name" required />
                        <span className="focus-input100"></span>
                    </div>
                    <div className="wrap-input100 validate-input">                        
                        <input className="input100" type="text" name="Lname"  placeholder="Last Name" required />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input">                        
                        <input className="input100" type="email" name="mail"  placeholder="Email" required />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input">                        
                        <input className="input100" type="password" name="psd"  placeholder="Password" required />
                        <span className="focus-input100"></span>
                    </div>
                    
                     <div className="wrap-input100 validate-input">                        
                        <input className="input100" type="password" name="cpsd"  placeholder="Confirm Password" required />
                        <span className="focus-input100"></span>
                    </div>


                    <div className="container-login100-form-btn">
                        <div className="wrap-login100-form-btn">
                            <div className="login100-form-bgbtn"></div>
                            <button className="login100-form-btn">
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
