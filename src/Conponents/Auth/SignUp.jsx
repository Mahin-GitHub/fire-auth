import React, { useState } from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase'


const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SignUp = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           console.log(userCredential);
          })
          .catch((error) => {
            console.log(error);
          });
        
    }
    return (
        <div>
            <h1>Create a Account</h1>
            <form onSubmit={SignUp} action="">
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

                <button type='submit' >SignUp</button>
            </form>
        </div>
    );
};

export default SignUp;