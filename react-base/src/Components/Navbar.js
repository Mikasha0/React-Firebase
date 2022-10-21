import React from "react";
import { Link } from "react-router-dom";
import {auth} from '../Config/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {signOut} from 'firebase/auth'

export default function Navbar() {

  const signUserOut = async () => {
    await signOut(auth);
  }

  const [user] = useAuthState(auth);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            social-media
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              {!user ? (<li className="nav-item">
                <Link to="/login" className="nav-link active">
                  Login
                </Link>
              </li>) :
              (<li className="nav-item">
                <Link to="/createPost" className="nav-link active">
                  create post
                </Link>
              </li>)}
              <li className="nav-item">
                <Link to="/register" className="nav-link active">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/validate" className="nav-link active">
                  Validate
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reactHookForm" className="nav-link active">
                  ReactHookForm
                </Link>
              </li>
            </ul>
          </div>
          <img
            src={user?.photoURL || ""}
            className="rounded-circle z-depth-0"
            type='button'
            onClick={signUserOut}
            alt=""
            height="35"
          />
        </div>
      </nav>
    </div>
  );
}
