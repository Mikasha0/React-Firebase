import React from "react";
import {auth, provider} from "../Config/firebase";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  const signInWithGoogle = async() =>{
    const result = signInWithPopup(auth,provider)
    console.log(result);
    navigate("/")
  }

  return (
    <>
      <div className="login text-center my-3">
        Sign In with Google to continue.
      </div>
      <div className="text-center">
        <button className="btn btn-warning" onClick={signInWithGoogle}>Sign In</button>
      </div>
    </>
  );
}
