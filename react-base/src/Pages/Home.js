import React from "react";
import { auth } from "../Config/firebase";
import {useAuthState} from 'react-firebase-hooks/auth';
import {addDoc, collection} from 'firebase/firestore';
import { db } from "../Config/firebase";
import {useContext} from 'react';
import {AppContext} from '../App';

export default function Home() {

  const [user] = useAuthState(auth);
  const postRef = collection(db, 'posts');  

  const {username,catFact} = useContext(AppContext);

  return (
    <>
    <div className="container text-center my-3">
      <h6>{user?.displayName}</h6>
      <img src={user?.photoURL || ""} style={{width: "100", height: "100"}} alt='' />
    </div>
    <div className="container w-50 text-center" style={{color:'green'}}><h6>Welcome Back {username}!</h6></div>
    <div className="container w-50 text-center" style={{color:'green'}}><h6> {catFact}</h6></div>
    </>
  );
}
