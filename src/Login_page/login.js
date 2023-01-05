/* Made by Aashna, Amilesh, Neel 27/12/2022 */
import React, { useState, useEffect } from "react";
import {auth, provider} from "../firebase-config"
import {signInWithPopup} from "firebase/auth";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Friends from "../Friends/friends";
import "./login.css";

const Login = () => {
   const [sidebar, setsidebar] = useState(false);

   return(SignIn());
   function SignIn(){
      const [value,setValue] = useState('')
      const[name,setName] = useState('');
      const handleClick =()=>{
         signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email);
            setName(data.user.displayName);
            localStorage.setItem("email",data.user.email);
            localStorage.setItem("name",data.user.displayName);
        })
    }
   useEffect(()=>{
      setValue(localStorage.getItem('email'))
  })




   return (
      

   <div className="login-border">
      <div className="login-border-white">
         <div className="login">
            <h3>Login</h3>
            {value?<></>:
            <button className="google-btn" onClick={handleClick}>Sign In With Google</button>
            }
            <h3>You are {value?"logged in": "not logged in"}</h3>
         </div>
      </div>
   </div>

   );
}

};


export default Login;
