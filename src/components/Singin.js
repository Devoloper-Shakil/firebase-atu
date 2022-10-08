import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import firebaseConfig from "./firebaseConfig"

import { Link } from 'react-router-dom'
import "./Sinup.css"
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged  } from "firebase/auth";

const Singin = () => {
    const auth = getAuth();

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState("")
    const hendelSingup = (e) => {
        e.preventDefault();
        if (!email && !password) {
            setErr("Plese Filep the Fulled")
        }
        else if (!email) {
            setErr("Plese Chak Email")
        }
        else if (!password) {

            setErr("Plese Chak password")
        } else if (password.length < 7) {

            setErr(" password 8 cerecter plase")
        }

        else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    setErr("")
                   navigate("/")
                })

                .catch((error) => {
                    console.log(error.code);
                    if (error.code == "auth/user-not-found") {
                        setErr("wrong-Email");
                    }
                    if(error.cod=="auth/wrong-password"){
                        setErr("wrong-password")
                    }
                    
                    else {
                        setErr("");
                    }

                });

        }
    }
    onAuthStateChanged(auth, (user) => {
        if (user) {
          navigate("/");
        }
      });


    return (
        <div className="singup">
            <h2>Sing In Your Acount</h2>
            <div>

                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Your Email" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Your Password" />
                <h6>{err}</h6>
                <button onClick={hendelSingup}> Sing Up</button>
                <span > <Link className="creat" to="/singup">you hav Don't  Acount ? singup</Link></span>

            </div>

        </div >
    )
}

export default Singin