import React from 'react'
import {auth} from '../Config/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

export default function Home() {
  
  const [user] = useAuthState(auth);
  return (
    <>
    <div>This is the home page.</div>
    <div className="text-center">{user?.displayName}</div>
    <img src={user?.photoURL} alt="" width="100" height="100"/>
    </>
  )
}
