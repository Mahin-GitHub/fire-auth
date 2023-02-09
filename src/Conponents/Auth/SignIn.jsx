import React, { useState } from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase'


const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SignIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           console.log(userCredential);
          })
          .catch((error) => {
            console.log(error);
          });
        
    }
    return (
        <div>
            <h1>Login a Account</h1>
            <form onSubmit={SignIn} action="">
                <input type="email"
                placeholder='Enter Your Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />


                <input type="password" 
                placeholder='Enter your Password' 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />

                <button type='submit' >SignIn</button>
            </form>
        </div>
    );
};

export default SignIn;