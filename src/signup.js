import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as GoogleIcon } from "./google.svg";
import { ReactComponent as GuestIcon } from "./guest.svg";
import { ReactComponent as EmailIcon } from "./email.svg";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInAnonymously,
} from "@firebase/auth";
import { auth } from "./firebaseConfig";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleEmailPasswordSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );
      const user = userCredential.user;
      alert("Account created Successfully!!!");
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert("Google Sign In Successful!");
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleAnonymousSignUp = async () => {
    try {
      const userCredential = await signInAnonymously(auth);
      const user = userCredential.user;
      alert("Anonymous Sign In Successful!");
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="main_container_signup">
        <div className="header">
          <h2>Signup</h2>
        </div>
        <div className="box">
          <input
            type="text"
            value={name}
            placeholder="UserName"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
            type="password"
            value={pass}
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button onClick={handleEmailPasswordSignUp}>
          <EmailIcon />
          SignUp with Email/Password
        </button>
        <button onClick={handleGoogleSignUp}>
          <GoogleIcon />
          SignUp with Google
        </button>
        <button onClick={handleAnonymousSignUp}>
          <GuestIcon />
          Guest Mode
        </button>
        <p>
          Already have an account? <Link to="/login">Login Now </Link>
        </p>
        <p> (To Sync with App login with Email.)</p>
      </div>
    </>
  );
};

export default Signup;
