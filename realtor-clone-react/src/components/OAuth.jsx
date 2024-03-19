import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';

function OAuth() {
    const navigate = useNavigate();

    async function onGoogleClick() {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Check whether user is already exists in DB or not

            const docRef = doc(db, "users", user.uid); //It returns a promise
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                await setDoc(docRef, {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp()
                });
            }
            navigate('/');

        } catch (error) {
            toast.error("Could not authorize with Google");
            console.log(error);
        }
    }

    return (
        <button onClick={onGoogleClick} type="button" className="flex justify-center items-center w-full bg-red-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:shadow-lg active:shadow-lg hover:bg-red-700 transition duration-150 ease-in-out active:bg-red-800">
            <FcGoogle className='text-2xl bg-white rounded-full mr-2' />
            Continue with Google
        </button>
    )
}

export default OAuth