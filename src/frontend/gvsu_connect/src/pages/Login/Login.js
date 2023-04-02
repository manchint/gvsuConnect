import React, { useRef, useState } from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
function Login() {
  
    let navigate = useNavigate();
    let emailRef = useRef();
    let passRef = useRef()
    const [errmsg, setErrMsg] = useState();
   const onClickLogin = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate('/home');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
   }
    
    return (
        <>
          
            <div className="limiter">
                <div className="container-login100">
                    <div className="login100-more" ></div>
                    <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                        <form classNameName="login100-form validate-form">
                            <span style={{color:'red'}}>{errmsg}</span>
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

