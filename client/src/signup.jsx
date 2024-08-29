import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import BackButton from './backbutton';
import { setDoc, doc } from 'firebase/firestore';
import './signup.css';

import {toast}  from "react-toastify"

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // React Router's hook to navigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save user data (excluding password) in Firestore
            await setDoc(doc(db, "users", user.uid), {
                email: email,
                createdAt: new Date()
            });

            console.log("User registered successfully");
            navigate('/chatbot'); // Navigate to the dashboard or home page

            toast.success("user succesfully registered")



        } catch (error) {
            console.error("Error signing up:", error.message);
            setError(error.message);
        }
    };

    return (
        <div>
            <BackButton />
            <div className="signup-form">
                <h1>Signup</h1>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    
                    <input
                        type="email"
                        placeholder="Enter email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <br />
                    
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    
                    <br />
                    <button type="submit">SIGN UP</button>
                </form>
                <p id="loginAlready">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </div>
    );
}