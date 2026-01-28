import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import {app} from "../firebase";




function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth(app);

    const createUser = () => {
createUserWithEmailAndPassword(auth, email , password).then(value => alert("success"));
    };


  return (
    <div className='signup-page'>
      <label htmlFor="email">Email:</label>
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Enter Your email here' required/>
      <label htmlFor="password">Password</label>
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Enter password' required/>
      <button onClick={createUser}>SignUp</button>
    </div>
  )
}

export default Signup
