import React from 'react';
import { Link} from 'react-router-dom';

import cryptoJs from 'crypto-js';
function Login() {
  
    let navigate = useNavigate();

   const [email, setEmail] = useState();
   const [password, setPassword] = useState();

   const onClickLogin = () => {
        var ciphertext = CryptoJS.AES.encrypt(password, 'my password').toString();
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
                                
                                <input className="input100" type="email" name="mail"  placeholder="Email" required />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input">
                                
                                <input className="input100" type="password" name="psd"  placeholder="Password" required />
                                <span className="focus-input100"></span>
                            </div>


                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    <button className="login100-form-btn">
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

