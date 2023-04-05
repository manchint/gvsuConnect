import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {db} from '../../firebase'
import { doc, setDoc } from 'firebase/firestore';
import toast, { Toaster } from 'react-hot-toast';
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
  } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
function Signup() {
    let navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        'fname' : '',
        'lname' : '',
        'password' : '',
        'email' : '',
        'profile' : {}
    })
    const [confirmPassword, setConfirmPassword] = useState('')
    const storeImage = async (image) => {
        return new Promise((resolve, reject) => {
          const auth = getAuth();
          const storage = getStorage();
          const filename = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
          const storageRef = ref(storage, filename);
          const uploadTask = uploadBytesResumable(storageRef, image);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  console.log("Upload is running");
                  break;
              }
            },
            (error) => {
              // Handle unsuccessful uploads
              reject(error);
            },
            () => {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                resolve(downloadURL);
              });
            }
          );
        });
      }
    const onClickSubmit = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth();
            //const imagesURL =  userDetails.profile && await Promise.all([storeImage(userDetails.profile)])
            const userCredentials = await createUserWithEmailAndPassword(auth, userDetails.email, userDetails.password)
                .then(async (userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("sdcsdcsd", user)
                    updateProfile(auth.currentUser, {
                        displayName : userDetails.fname + ' ' + userDetails.lname
                        //photoURL :  imagesURL[0]
                    })
                    const dataCopy = {...userDetails};
                    delete dataCopy.password;
                    delete dataCopy.profile;
                    await setDoc(doc(db, "users", user.uid), dataCopy)
                    navigate('/main');
                })
                .catch((error) => {
                    toast.error(error.message)
                    
            });
        } catch(err) {
            toast.error(err)
        }

   }

    return (
        <div className="limiter">
            <div><Toaster
            position="bottom-center"
            reverseOrder={false}
            /></div>
        <div className="container-login100">
            <div className="login100-more" ></div>
            <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                <form classNameName="login100-form validate-form" >
                    <span className="login100-form-title pb-5">
                        Signup
                    </span>

                    {/* <input type="file" onChange={(e) => setUserDetails({...userDetails,'profile': e.target.files[0]})}/> */}

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
