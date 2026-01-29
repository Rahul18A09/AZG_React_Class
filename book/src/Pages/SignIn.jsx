import React, { useState } from 'react'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { app } from '../firebase';


function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const auth  = getAuth(app);

const SignIn  = () =>{
    signInWithEmailAndPassword(auth, email, password).then((value) => console.log("Signin success")).catch((error) => console.log(error));
}

  return (
    <div className="signin-page">
      <label htmlFor="email">Email:</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter Your email here"
        required
      />
      <label htmlFor="password">Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter password"
        required
      />
      <button onClick={SignIn}>Sign me In</button>
    </div>
  )
}

export default SignIn;
