import React from 'react'
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const auth = getAuth();
    const navigate = useNavigate();



    const hendelLog = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/singin");
        });

        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(auth.currentUser);
            } else {
                // User is signed out
                navigate("/singin");
            }
        })}


    return (
        <div>
            <h1>HOME</h1>
            <img className="rounded-circle pr-3" style={{ width: '50px' }} src={auth.currentUser.photoURL} alt="" />
            <h5 className="text-light">{auth.currentUser.displayName}</h5>
            <button onClick={hendelLog} className=" w-25">Log Out</button>
        </div>
    )
}

export default Home