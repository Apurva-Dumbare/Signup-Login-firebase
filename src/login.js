import React, { useState } from "react";
import "./sign.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import Firebase from "./firebaseConfig";
import { auth } from "./firebaseConfig";

const Login = () => {
  //const [name,setName]=useState('')
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await Firebase.auth().signInWithEmailAndPassword(
        email,
        pass
      );
      if (user) {
        alert("Login Successfully!!!");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <div className="main_container_signup">
        <div className="header">
          <h2>Login</h2>
        </div>
        {/* <div className='box'> 
          <input type='text' value={name} placeholder='UserName' onChange={ (e)=> setName (e.target.value)}/>
        </div> */}
        <div className="box">
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="text"
            value={pass}
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <p>
          Don't have an account? <Link to="/">Create Account</Link>
        </p>
        <button onClick={submit}>Login</button>
      </div>
    </>
  );
};

export default Login;
