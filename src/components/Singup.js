import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import firebaseConfig from "./firebaseConfig"
import { Link } from 'react-router-dom'
import "./Sinup.css"
import { getAuth, createUserWithEmailAndPassword, updateProfile,onAuthStateChanged } from "firebase/auth";


const Singup = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState("")


    const hendelSingup = (e) => {
        e.preventDefault();
        if (!name && !email && !password) {
            setErr("Plese Filep the Fulled")
        } else if (!name) {
            setErr("Plese Chak Name")
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
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    updateProfile(auth.currentUser, {
                        displayName: name, 
                        photoURL: "https://www.w3schools.com/w3images/avatar2.png"
                    }).then(() => {
                        // Profile updated!
                        setErr("")
                        navigate("/")
                    })
                    

                })
                .catch((error) => {
                    console.log(error.code);
                    if (error.code === "auth/email-already-in-use") {
                        setErr("Email already in use!");
                    } else {
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
            <h2>Create a New Acount</h2>
            <div>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Your Name" />
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Your Email" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Your Password" />
                <h6>{err}</h6>
                <button onClick={hendelSingup}> Sing Up</button>
                <span > <Link className="creat" to="/singin">Allready Acount ? singin</Link></span>

            </div>

        </div >
    )
}

export default Singup